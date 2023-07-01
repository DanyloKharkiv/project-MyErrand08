import { useSelector } from "react-redux";
import { getAvatar } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";
import { EditProfileForm, EditProfileInput, BtnEditProfile, EditProfileTitle, EditProfileImg, EditBtn, EditCloseBtn } from "./EditProfile.Styled";
import sprite from '../../../images/sprite.svg';

const EditProfile = () => {
    const userAvatar = useSelector(getAvatar);
    const avatarURL = userAvatar ? userAvatar : userTemp;
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <EditProfileForm>
            <EditProfileTitle>Edit profile</EditProfileTitle>
            <EditCloseBtn type="button" onclick="">
                <svg width="18" height="18" fill="red">
                    <use href = {sprite+'#icon-x'}></use>
                </svg>
            </EditCloseBtn>
            <EditProfileImg src={avatarURL} alt="user_icon" width={68} height={68} />
            <EditBtn type="button" onclick="">
                <svg width="10" height="10" stroke="black" >
                    <use href = {sprite+'#icon-plus-1'}></use>
                </svg>
            </EditBtn>
            <EditProfileInput type="text" placeholder="Name"></EditProfileInput>
            <EditProfileInput type="email" placeholder="Email"></EditProfileInput>
            <EditProfileInput type="password" placeholder="Password"></EditProfileInput>
            <BtnEditProfile type="submit">Send</BtnEditProfile>
        </EditProfileForm>
    );
};

export default EditProfile;