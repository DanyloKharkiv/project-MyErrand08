import { useSelector } from "react-redux";
import { getAvatar, getName, getUserEmail } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";
import {
    EditProfileForm,
    EditProfileInput,
    BtnEditProfile,
    EditProfileTitle,
    EditProfileImg,
    EditCloseBtn,
    ToggleShowPasword,
    PasswordWrapper,
    Foto,
    EditFoto,
    FileWrapper
} from "./EditProfile.Styled";
import sprite from '../../../images/sprite.svg';
import { useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const EditProfile = ({modalClose}) => {
    const userAvatar = useSelector(getAvatar);
    const userName = useSelector(getName);
    const userEmail = useSelector(getUserEmail);
    const [showPassword, setShowPassword] = useState(false);
    const avatarURL = userAvatar ? userAvatar : userTemp;

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
    return (
        <EditProfileForm>
            <EditProfileTitle>Edit profile</EditProfileTitle>
            <EditCloseBtn type="button" onClick={()=>{modalClose()}}>
                <svg width="18" height="18" fill="red">
                    <use href = {sprite+'#icon-x'}></use>
                </svg>
            </EditCloseBtn>
            <EditProfileImg src={avatarURL} alt="user_icon" width={68} height={68} />
            <FileWrapper>
                <Foto type="file">
                </Foto>
                <EditFoto width="10" height="10" stroke="black" >
                    <use href = {sprite+'#icon-plus'}></use>
                </EditFoto>
            </FileWrapper>
            <EditProfileInput type="text" placeholder={userName}></EditProfileInput>
            <EditProfileInput type="email" pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/" placeholder={userEmail}></EditProfileInput>
            <PasswordWrapper>
                <EditProfileInput type={showPassword ? 'text' : 'password'} placeholder="Password" minLength="8" maxLength="64"></EditProfileInput>
                <ToggleShowPasword onClick={togglePasswordVisibility}>
                    {showPassword ? (
                        <BsEyeSlash
                        color="#ffffff4d"
                        style={{ width: 18, height: 18 }}
                        />
                    ) : (
                        <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                    )}
                </ToggleShowPasword>
            </PasswordWrapper>
            <BtnEditProfile type="submit">Send</BtnEditProfile>
        </EditProfileForm>
    );
};

export default EditProfile;