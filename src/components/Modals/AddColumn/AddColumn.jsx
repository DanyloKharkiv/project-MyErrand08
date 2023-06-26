import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FrmButton } from './AddColumn.Styled';
import { selectColumnsItems } from '../../../redux/column/columnSlice';
import { addColumn } from '../../../redux/column/columnOperation';


const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const ColumnSchema = Yup.object().shape({
    name: Yup.string()
        .matches(nameRegex, {message: "Invalid name", })
        .required('Required')
});


const AddColumn = () => {
    const dispatch = useDispatch();
    const columnsItems = useSelector(selectColumnsItems);
   
    return (
        <Formik
            initialValues={{
                name: '',
            }}
            validationSchema={ColumnSchema}
            onSubmit={(data, actions) => {
                if (columnsItems.find(item => item.name.toLowerCase() === data.name.toLowerCase())) {
                    return Notiflix.Notify.failure(`Колонка ${data.name} вже існує`);
                }
                dispatch(addColumn(data));
                Notiflix.Notify.success(`Колонка ${data.name} успішно додана`);
                
                actions.resetForm();
            }}
        >

            <Form>
                <FormField>
                    Name
                    <Field name="name" />
                    <ErrorMessage name="name" component="span" />
                </FormField>
                <FrmButton type="submit">Add Column</FrmButton>
            </Form>
    
        </Formik>
    );
    
}

export default AddColumn;