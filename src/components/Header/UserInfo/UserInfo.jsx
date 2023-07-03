import { UserInfoBox, UserName, UserAvatar } from "./UserInfo.Styled";
import sprite from "../../../images/sprite.svg"
import { useSelector } from "react-redux";
import { getName, getAvatar } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";
import { useState } from "react";
import EditProfile from "../../Modals/EditProfile/EditProfile";

export const UserInfo = () => {
  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avatarURL = userAvatar ? userAvatar : userTemp;

  const modalClose = () => {
    setIsModalOpen(false);
  }

  const modalOpen = () => {
    setIsModalOpen(true);
  }

//   return (
//     <>
//       <UserInfoBox>
//         <UserName>{userName}</UserName>
//         <UserAvatar src={avatarURL} alt="user_icon" width={32} height={32} onClick={modalOpen}/>
//       </UserInfoBox>
//       {isModalOpen && <EditProfile modalClose={modalClose} />}
//     </>
//   );
// };

  return (
    <>
      <UserInfoBox>
        <UserName>{userName}</UserName>
        {!userAvatar && 
                <UserAvatar>
                  <svg width="32" height="32" onClick={modalOpen}>
                    <use href={sprite + `#icon-user`}></use>
                    </svg>
                    </UserAvatar>}
        {userAvatar &&
        <UserAvatar src={userAvatar} alt="user_icon" width={32} height={32} onClick={modalOpen}/>}
      </UserInfoBox>
      {isModalOpen && <EditProfile modalClose={modalClose} />}
    </>
  );
}; 
