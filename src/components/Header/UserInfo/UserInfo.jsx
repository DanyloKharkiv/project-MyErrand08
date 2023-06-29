import { UserInfoBox, UserName, UserAvatar } from "./UserInfo.Styled";

import { useSelector } from "react-redux";
import { getName, getAvatar } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";

export const UserInfo = () => {
  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);
  const avatarURL = userAvatar ? userAvatar : userTemp;

  return (
    <>
      <UserInfo>
        const userName = useSelector(getName);
        <UserName>{userName}</UserName>
        <UserAvatar src={avatarURL} alt="user_icon" width={32} height={32} />
      </UserInfo>
    </>
  );
};
