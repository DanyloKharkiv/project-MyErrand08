import { useSelector } from "react-redux";
import { getAvatar } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";
import { EditProfileForm, EditProfileInput, BtnEditProfile, EditProfileTitle, EditProfileImg} from "./EditProfile.Styled";

const EditProfile = () => {
    const userAvatar = useSelector(getAvatar);
    const avatarURL = userAvatar ? userAvatar : userTemp;
    return (
            <EditProfileForm>
            <EditProfileTitle>Edit profile</EditProfileTitle>
            <EditProfileImg src={avatarURL} alt="user_icon" width={68} height={68} />
                <EditProfileInput type="text" placeholder="Name"></EditProfileInput>
                <EditProfileInput type="email" placeholder="Email"></EditProfileInput>
                <EditProfileInput type="password" placeholder="Password"></EditProfileInput>
                <BtnEditProfile type="submit">Send</BtnEditProfile>
            </EditProfileForm>
    );
};

export default EditProfile;