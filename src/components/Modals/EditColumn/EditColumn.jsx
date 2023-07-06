import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FieldInput, FrmButton, CloseBtn, IconWrapper, Div } from './EditColumn.Styled';
import { selectColumnsItems } from '../../../redux/column/columnSlice';
// import { addColumn } from '../../../redux/column/columnOperation';

import sprite from '../../../images/sprite.svg';
import { editColumn } from '../../../redux/column/columnOperation';


const nameRegex = /^[a-zA-Zа-яА-Я 0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const ColumnSchema = Yup.object().shape({
    title: Yup.string()
        .matches(nameRegex, {message: "Invalid title", })
        .required('Required')
});


const EditColumn = ({ ColumnTitle, ColumnId, close }) => {
    const dispatch = useDispatch();
    const columnsItems = useSelector(selectColumnsItems);

    const handleClose = () => {
        close();
    }

    return (
        <Formik
            initialValues={{
                title: ColumnTitle,
            }}
            validationSchema={ColumnSchema}
            onSubmit={(data, actions) => {
                if (columnsItems.find(item => item.title.toLowerCase() === data.title.toLowerCase())) {
                    return Notiflix.Notify.failure(`Колонка ${data.title} вже існує`);
                }

                const newData = { title: data.title, _id:ColumnId };
                
                dispatch(editColumn(newData));
                Notiflix.Notify.success(`Колонка ${ColumnId} ${data.title} успішно змінена.`);
                
                actions.resetForm();
                handleClose();
            }}
        >

            <Form>
                <CloseBtn onClick={handleClose} stroke="var(--modalCloseIcon)">
                    <use href = {sprite + '#icon-x'}></use>
                </CloseBtn>

                <FormField>
                    Edit column
                    <Field name="title">
                        {({ field, }) => (
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
              Edit
            </Div>
                    </FrmButton>
            </Form>
    
        </Formik>
    );
    
}

export default EditColumn;