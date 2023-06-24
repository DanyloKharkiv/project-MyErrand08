import { Logo } from "./Logo/Logo";
import { Boards } from "./Boards/Boards";
import { CreateBoardBtn } from "./CreateBoard/CreateBoard";
import { CustomerSupport } from "./CustomerSupport/CustomerSupport";
import { LogOut } from "./LogOut/LogOut";
import { Section } from "./SideBar.Styled";

export const Sidebar = () => {
  return (
    <Section>
      <Logo />
      <CreateBoardBtn />
      <Boards />
      <CustomerSupport />
      <LogOut />
    </Section>
  );
};
