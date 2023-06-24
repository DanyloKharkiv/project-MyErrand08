import { UserInfo } from "./UserInfo/UserInfo";
import { ThemeSelect } from "./ThemeSelect/ThemeSelect";
import { HeaderSection } from "./Header.Styled";

export const Header = () => {
  return (
    <HeaderSection>
      {/* <ThemeSelect /> */}
      <UserInfo />
    </HeaderSection>
  );
};
