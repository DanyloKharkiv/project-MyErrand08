import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { Field as FormikField } from "formik";
import { ErrorMessage as FormikError } from "formik";

export const Wrapper = styled.div`
  width: 100%;
  height: 522px;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background-color: var(--themeBgColor);
  border-radius: 8px;
  position: relative;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
`;

export const Field = styled(FormikField)`
  position: relative;
  padding: 14px 18px;
  margin-bottom: 14px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--activeItemBorder);
  color: #ffffff;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
export const Textarea = styled(FormikField)`
  padding: 14px 18px;
  margin-bottom: 14px;
  width: 100%;
  height: 154px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--activeItemBorder);
  color: #ffffff;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  &:active {
    background-color: var(--blackColor);
  }

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 49px;
  background-color: #bedbb0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--blackColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  margin: 4px;
  background-color: var(--addBtnBox);
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: 18px;
  color: var(--addBtnBox);
`;

export const SpanClose = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  left: calc(100% - 24px);
`;

export const FieldRadio = styled(FormikField)`
  margin: 2px;
`;
