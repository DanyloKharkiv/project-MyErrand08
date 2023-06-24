import React from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Section } from "./HomePage.Styled";
import { ScreensPage } from "../ScreensPage/ScreensPage";

const HomePage = () => {
  return (
    <Section>
      <Sidebar />
      <section>
        <Header />
        <ScreensPage />
      </section>
    </Section>
  );
};

export default HomePage;
