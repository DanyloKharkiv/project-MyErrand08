import styled from 'styled-components';

export const Text = styled.span`
  margin-right: 8px;
  font-size: 14px;
`;
export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const UserName = styled.p`
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  margin-left: 14px;
  cursor: pointer;
  color: var(--userNameColor);
  &:hover {
    color: var(--accentColor);
  }
`;

export const UserAvatarBox = styled.div`
  border-radius: 8px;
  cursor: pointer;
  height: 32px;
  width: 32px;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  height: 32px;
  width: 32px;
`;
