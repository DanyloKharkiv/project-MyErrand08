import { LogoutElement, LogoutBtn } from "./LogOut.Styled";
import sprite from "../../../images/sprite.svg";
import Notiflix from "notiflix";
import { logOut } from "../../../redux/auth/authOperation";
import { useDispatch } from "react-redux";

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    Notiflix.Confirm.init({
      width: "300px",
      position: "center-top",
      fontFamily: "Poppins",
      titleColor: "#bedbb0",
      okButtonBackground: "#bedbb0",
    });
    Notiflix.Confirm.show(
      "Confirmation",
      "Are you sure you want to log out?",
      "Yes",
      "No",
      () => {
        dispatch(logOut());
      },
      () => {}
    );
  };
  return (
    <LogoutElement onClick={handleClickLogOut}>
      <svg width="32" height="32">
        <use href={sprite + `#icon-login`}></use>
      </svg>
      <LogoutBtn type="button">
        Log out
      </LogoutBtn>
    </LogoutElement>
  );
};
