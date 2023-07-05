import { UserInfoBox, UserName, UserAvatar, UserAvatarBox } from './UserInfo.Styled';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { getName, getAvatar } from '../../../redux/auth/authSelector';

import { useState } from 'react';
import EditProfile from '../../Modals/EditProfile/EditProfile';

export const UserInfo = () => {
  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <UserInfoBox>
        <UserName>{userName}</UserName>
        {!userAvatar && (
          <UserAvatarBox>
            <svg width="32" height="32" onClick={modalOpen}>
              <use href={sprite + `#icon-user`}></use>
            </svg>
          </UserAvatarBox>
        )}
        {userAvatar && (
          <UserAvatarBox src={userAvatar} alt="user_icon">
            <UserAvatar src={userAvatar} alt="user_icon" onClick={modalOpen}></UserAvatar>
          </UserAvatarBox>
        )}
      </UserInfoBox>
      {isModalOpen && <EditProfile modalClose={modalClose} />}
    </>
  );
};
