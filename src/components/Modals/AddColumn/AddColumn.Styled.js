import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
  padding: 24px;
  background-color:var(--themeBgColor);
  width: 340px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  margin-left: auto;
  margin-right: auto;
       
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  color: #FFF;
  font-size: 18px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px; 
`;

export const FieldInput = styled.input`
margin-top: 24px;
padding: 14px 18px 14px 18px;
align-items: center; 
color: #FFF;
border-radius: 8px;
border: 1px solid #BEDBB0;
opacity: 0.4000000059604645;
background: #1F1F1F;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08); 
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const FrmButton = styled.button`
  display: flex;
  margin-top: 24px;
  padding: 10px 0px 11px 0px;
  width: 100%;
  justify-content: center;
  align-items: center; 
  border-radius: 8px;
  background: #BEDBB0; 
  cursor: pointer;
color: #161616;
font-size: 14px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px; 
`;

export const CloseBtn = styled.svg`
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
    position: absolute;
    fill: red;
    z-index: 9999;
    cursor: pointer;
`