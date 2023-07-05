import { useDispatch, useSelector } from 'react-redux';
import { getAvatar, getName, getUserEmail } from '../../../redux/auth/authSelector';

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
  FileWrapper,
  EditProfileSvg,
} from './EditProfile.Styled';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import axios from 'axios';
import { Notify } from 'notiflix';
import { updateAvatar, updateEmail, updateName } from '../../../redux/auth/authOperation';

const EditProfile = ({ modalClose }) => {
  const userAvatar = useSelector(getAvatar);
  const userName = useSelector(getName);
  const userEmail = useSelector(getUserEmail);

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleAvatarChange = async e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    await dispatch(updateAvatar(formData));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (e.target.name.value.trim()) {
      try {
        await dispatch(updateName(e.target.name.value.trim()));
        Notify.success('Name changed');
      } catch (error) {
        console.log(error);
      }
    }

    if (e.target.email.value.trim()) {
      try {
        await dispatch(updateEmail(e.target.email.value.trim()));
        Notify.success('Email changed');
      } catch (error) {
        console.log(error);
      }
    }

    if (e.target.password.value.trim()) {
      try {
        const { data } = await axios.patch('/users/password', {
          password: e.target.password.value.trim(),
        });
        Notify.success(data.message);
      } catch (error) {
        console.log(error);
      }
    }

    modalClose();
  };

  return (
    <EditProfileForm onSubmit={handleSubmit} encType="multipart/form-data">
      <EditProfileTitle>Edit profile</EditProfileTitle>
      <EditCloseBtn
        type="button"
        onClick={() => {
          modalClose();
        }}
      >
        <svg width="18" height="18" stroke="var(--modalCloseIcon)">
          <use href={sprite + '#icon-x'}></use>
        </svg>
      </EditCloseBtn>
      {!userAvatar && (
        <EditProfileSvg width="68" height="68">
          <use href={sprite + `#icon-user`}></use>
        </EditProfileSvg>
      )}
      {userAvatar && <EditProfileImg src={userAvatar} alt="user_icon" width={68} height={68} />}
      <FileWrapper>
        <Foto type="file" accept="image/*,.png,.jpg,.gif,.web" onChange={handleAvatarChange}></Foto>
        <EditFoto width="10" height="10" stroke="black">
          <use href={sprite + '#icon-plus'}></use>
        </EditFoto>
      </FileWrapper>
      <EditProfileInput type="text" name="name" placeholder={userName}></EditProfileInput>
      <EditProfileInput type="email" name="email" placeholder={userEmail}></EditProfileInput>
      {/* pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/" */}
      <PasswordWrapper>
        <EditProfileInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          minLength="8"
          maxLength="64"
        ></EditProfileInput>
        <ToggleShowPasword onClick={togglePasswordVisibility}>
          {showPassword ? (
            <BsEyeSlash color="var(--modalSmallTitle)" style={{ width: 18, height: 18 }} />
          ) : (
            <BsEye color="var(--modalSmallTitle)" style={{ width: 18, height: 18 }} />
          )}
        </ToggleShowPasword>
      </PasswordWrapper>
      <BtnEditProfile type="submit">Send</BtnEditProfile>
    </EditProfileForm>
  );
};

export default EditProfile;
