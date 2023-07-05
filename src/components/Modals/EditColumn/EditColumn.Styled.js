import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
  padding: 24px;
  background-color:var(--modalBg);
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
  color: var(--modalTitle);
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
color: var(--modalInputTxt);
border-radius: 8px;
border: 1px solid var(--modalInputBorder);
opacity: 0.4000000059604645;
background: var(--modalInputBg);
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
  background: var(--modalAccentBtnBg); 
  cursor: pointer;
color: var(--modalAccentBtnTxt);
font-size: 14px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px; 
border: none;
height: 49px;
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

export const IconWrapper = styled.div`
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
