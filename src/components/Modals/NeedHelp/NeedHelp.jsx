import React from "react";
import {
  FormWrapper,
  Section,
  SubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  ModalForm,
  ErrorSection,
  ModalField,
  CloseModal,
} from "../NeedHelp/NeedHelp.Styled";
import { Formik } from "formik";
import * as Yup from "yup";
import sprite from "../../../images/sprite.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string().min(7).max(230).required("Comment is required"),
});
const initialValues = {
  email: "",
  comment: "",
};

const NeedHelp = ({ close }) => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    close();
  };
  const handleClose = () => {
    close();
  };

  return (
    <ModalField>
      <CloseModal onClick={handleClose}>
        <use
          href={sprite + "#icon-x"}
          width={18}
          height={18}
          stroke="var(--addBtnText)"
        />
      </CloseModal>
      <Section>
        <SectionTitle>Need help</SectionTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ModalForm>
            <FormWrapper>
              <ErrorSection name="email" />
              <TitleInput
                type="email"
                name="email"
                placeholder="Email address "
              />
              <ErrorSection name="comment" />
              <Textarea type="text" name="comment" placeholder="Comment" />
            </FormWrapper>
            <SubmitButton type="submit">Send</SubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </ModalField>
  );
};

export default NeedHelp;
