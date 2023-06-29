import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FieldInput, FrmButton } from './AddColumn.Styled';
import { selectColumnsItems } from '../../../redux/column/columnSlice';
import { addColumn } from '../../../redux/column/columnOperation';


const nameRegex = /^[a-zA-Zа-яА-Я 0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const ColumnSchema = Yup.object().shape({
    title: Yup.string()
        .matches(nameRegex, {message: "Invalid title", })
        .required('Required')
});


const AddColumn = () => {
    const dispatch = useDispatch();
    const columnsItems = useSelector(selectColumnsItems);

    return (
        <Formik
            initialValues={{
                title: '',
            }}
            validationSchema={ColumnSchema}
            onSubmit={(data, actions) => {
                if (columnsItems.find(item => item.title.toLowerCase() === data.title.toLowerCase())) {
                    return Notiflix.Notify.failure(`Колонка ${data.title} вже існує`);
                }
                dispatch(addColumn(data));
                Notiflix.Notify.success(`Колонка ${data.title} успішно додана`);
                
                actions.resetForm();
            }}
        >

            <Form>
                <FormField>
                    Add column
                    <Field name="title">
                        {({ field, }) => (
                            <FieldInput type="text" placeholder="Title" {...field} />
                         )}
                    </Field>
                    <ErrorMessage name="title" component="span" />
                </FormField>
                <FrmButton type="submit">Add</FrmButton>
            </Form>
    
        </Formik>
    );
    
}

export default AddColumn;