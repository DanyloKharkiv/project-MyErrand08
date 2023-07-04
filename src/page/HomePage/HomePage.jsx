import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Section, Main } from "./HomePage.Styled";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Section>
      {isSidebarOpen && windowWidth <= 1439 && <Sidebar />}
      {windowWidth >= 1440 && <Sidebar />}
      <Main>
        <Header openSideBar={toggleSidebar} />
        <ScreensPage />
      </Main>
    </Section>
  );
};

export default HomePage;
