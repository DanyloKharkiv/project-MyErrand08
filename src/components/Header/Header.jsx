import { UserInfo } from "./UserInfo/UserInfo";
import { HeaderSection, UserSection } from "./Header.Styled";
import { ThemeSelect } from "./ThemeSelect/ThemeSelect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export const Header = ({ openSideBar }) => {
  return (
    <HeaderSection>
      <BurgerMenu openSideBar={openSideBar} />
      <UserSection>
        <ThemeSelect />
        <UserInfo />
      </UserSection>
    </HeaderSection>
  );
};
