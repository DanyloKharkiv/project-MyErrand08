import { LogoElement, LogoTitle } from "./Logo.Styled";
import sprite from "../../../images/sprite.svg";

export const Logo = () => {
  return (
    <LogoElement>
      <svg width="32" height="32" >
        <use href={sprite + `#icon-icon-logo`}></use>
      </svg>
      <LogoTitle>Task Pro</LogoTitle>
    </LogoElement>
  );
};
