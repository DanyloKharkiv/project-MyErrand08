import * as Yup from "yup";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Field } from "formik";
import {
  Form,
  FormField,
  ErrorMessage,
  FieldInput,
  FrmButton,
  CloseBtn,
  ScrollBlock,
  IconWrapper,
  Div
} from "./AddColumn.Styled";
import { selectColumnsItems } from "../../../redux/column/columnSlice";
import { addColumn } from "../../../redux/column/columnOperation";

import sprite from "../../../images/sprite.svg";
import { getUserId } from "../../../redux/auth/authSelector";
import { selectActiveDeskId } from "../../../redux/desk/deskSelectors";

const options = {
  scrollbars: {
    scrollbars: { autoHide: 'scroll' },
    overflow: {
      x: 'hidden',
    },
  },
};

const nameRegex =
  /^[a-zA-Zа-яА-Я 0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const ColumnSchema = Yup.object().shape({
  title: Yup.string()
    .matches(nameRegex, { message: "Invalid title" })
    .required("Required"),
});

const AddColumn = ({ close }) => {
  const dispatch = useDispatch();
  const columnsItems = useSelector(selectColumnsItems);

  const handleClose = () => {
    close();
  };

  const ownerUser = useSelector(getUserId);
  const ownerDesk = useSelector(selectActiveDeskId);

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validationSchema={ColumnSchema}
      onSubmit={(data, actions) => {
        if (
          columnsItems.find(
            (item) => item.title.toLowerCase() === data.title.toLowerCase()
          )
        ) {
          return Notiflix.Notify.failure(`Колонка ${data.title} вже існує`);
        }

        const newData = { title: data.title, ownerUser, ownerDesk };

        dispatch(addColumn(newData));
        Notiflix.Notify.success(`Колонка ${data.title} успішно додана`);

        actions.resetForm();
        handleClose();
      }}
    >
      <ScrollBlock defer element="div" options={options}>
      <Form>
        <CloseBtn onClick={handleClose} stroke="var(--modalCloseIcon)">
          <use href={sprite + "#icon-x"}></use>
        </CloseBtn>

        <FormField>
          Add column
          <Field name="title">
            {({ field }) => (
              <FieldInput type="text" placeholder="Title" {...field} />
            )}
          </Field>
          <ErrorMessage name="title" component="span" />
        </FormField>
          <FrmButton type="submit">
            <Div>
              <IconWrapper>
                <svg width="20" height="20" stroke="var(--addBtnText)">
                  <use href={sprite + `#icon-plus`}></use>
                </svg>
              </IconWrapper>
              Add
            </Div>
            </FrmButton>
        </Form>
        </ScrollBlock>
    </Formik>
  );
};

export default AddColumn;
