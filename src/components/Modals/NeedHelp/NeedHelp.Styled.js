import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  color: var(--filterModalTitle);
  
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  align-items: start;
  margin-bottom: 24px;

`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: start;
  border-radius: 8px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #161616;
  background-color: #BEDBB0;

  
  cursor: pointer;

  
`;

export const TitleInput = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
  color: var(--filterModalTitle);
  background-color: var(--backgroundInput);
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  outline: none;

 

  &::placeholder {
    color: var(--filterModalText);
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
    

  }
`;

export const Textarea = styled(Field)`
  resize: vertical;
  width: 100%;
  height: 120px;
  padding: 14px 18px;
  color: var(--filterModalTitle);
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  
  background-color: var(--backgroundInput);
  border: 1px solid rgba(190, 219, 176, 0.5);
  outline: none;
  border-radius: 8px;

  

  margin-top: 14px;

  &::placeholder {
    color: var(--filterModalText);
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    
  }
`;




export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #fff;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;
export const ModalField = styled.div`
  padding: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 400px;
  height: 355px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background-color: var(--themeBgColor);
  margin-left: auto;
  margin-right: auto;

  
`;

export const CloseModal = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  
  width: 18px;
  height: 18px;
  cursor: pointer;
  `


  

