import styled from 'styled-components';

export const EditProfileForm = styled.form`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 24px;
  height: 440px;
  border-width: 1px;
  border-color: #bedbb080;
  border-style: solid;
  border-radius: 8px;
  background-color: var(--modalBg);
  z-index: 1;
  box-shadow: 0px 4px 16px 0px #1616160d;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const EditProfileTitle = styled.h2`
  color: var(--modalTitle);
  font-size: 18px;
  margin-bottom: 24px;
`;

export const EditProfileImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  cursor: pointer;
  border-radius: 8px;
`;

export const EditProfileSvg = styled.svg`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;

export const FileWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 130px;
  transform: translate(-50%, 0);
  background-color: var(--modalEditPlusFoto);
  width: 24px;
  height: 24px;
  border-radius: 8px;
`;

export const Foto = styled.input`
  width: 24px;
  height: 24px;
  background-color: #bedbb0;
  border-style: none;
  border-radius: 8px;
  opacity: 0;
`;


export const EditFoto = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const EditCloseBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 30px;
  height: 30px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EditProfileInput = styled.input`
  padding: 14px 18px;
  margin-bottom: 14px;
  width: 100%;
  height: 49px;
  border: 1px solid var(--modalInputBorder);
  border-radius: 8px;
  background-color: var(--modalInputBg);
  color: var(--modalInputTxt);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const ToggleShowPasword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
  cursor: pointer;
`;

export const BtnEditProfile = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 10px;
  margin-bottom: 24px;
  background-color: var(--modalAccentBtnBg);
  border-radius: 8px;
  cursor: pointer;
  color: var(--modalAccentBtnTxt);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
