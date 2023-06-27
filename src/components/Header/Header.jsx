import { UserInfo } from "./UserInfo/UserInfo";
import { HeaderSection } from "./Header.Styled";
import { ThemeSelect } from "./ThemeSelect/ThemeSelect";

export const Header = () => {
  return (
    <HeaderSection>
      <ThemeSelect/>
      <UserInfo />
    </HeaderSection>
  );
};
