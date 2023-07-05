import { Logo } from "./Logo/Logo";
import { Boards } from "./Boards/Boards";
import { CustomerSupport } from "./CustomerSupport/CustomerSupport";
import { LogOut } from "./LogOut/LogOut";
import { Section } from "./SideBar.Styled";

export const Sidebar = () => {
  return (
    <Section>
      <div>
        <Logo />
        <Boards />
      </div>
      <div>
        <CustomerSupport />
        <LogOut />
      </div>
    </Section>
  );
};
