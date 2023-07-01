import styled from 'styled-components';

export const EditProfileForm = styled.form`
    position: relative;
    padding: 24px;
    height: 440px;
    border-width: 1px;
    border-color: #BEDBB080;
    border-style: solid;
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px #1616160D;

    @media screen and (min-width: 375px) {
        width: 335px;
    }

    @media screen and (min-width: 768px) {
        width: 400px;
    }
    `;

export const EditProfileTitle = styled.h2`
    color: #ffffff; 
    font-size: 18px;
    margin-bottom: 24px;
    `;

export const EditProfileImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
`;

export const EditBtn = styled.button`
    position: absolute;
    left: 50%;
    top: 130px;
    transform: translate(-50%, 0);
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: #BEDBB0;
    border-style: none;
    border-radius: 8px;
    `;

export const EditCloseBtn = styled.button`
    position: absolute;
    right: 14px;
    top: 14px;
    width: 30px;
    height: 30px;
    border-style: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    `;

    export const EditProfileInput = styled.input`
    padding: 14px 18px;
    margin-bottom: 14px;
    width: 100%;
    height: 49px;
    border: 1px solid #bedbb0;
    border-radius: 8px;
    background-color: rgba(0,0,0,0);
    color: #ffffff;
    font-family: var(--poppinsFont);
    font-size: var(--fontSize14);

    outline: none;

    &::placeholder {
        font-size: var(--fontSize14);
    }
    `;

    export const BtnEditProfile = styled.button`
    width: 100%;
    height: 49px;
    margin-top: 10px;
    margin-bottom: 24px;
    background-color: #bedbb0;
    border-radius: 8px;
    cursor: pointer;
    color: var(--blackColor);
    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    border: none;
    transition: var(--transition);

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    `;