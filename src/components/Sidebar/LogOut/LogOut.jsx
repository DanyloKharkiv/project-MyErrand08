import { LogoutElement, LogoutBtn } from "./LogOut.Styled";
import sprite from "../../../images/sprite.svg";

export const LogOut = () => {
  return (
    <LogoutElement>
      <svg width="32" height="32">
        <use href={sprite + `#icon-login`}></use>
      </svg>
      <LogoutBtn>Log out</LogoutBtn>
    </LogoutElement>
  );
};
