import React from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Section, Main } from "./HomePage.Styled";
import CardTaskList from "../../components/CardTaskList/CardTaskList";

const HomePage = () => {
  return (
    <Section>
      <Sidebar />
      <Main>
        <Header />
        <CardTaskList />
        <ScreensPage />
      </Main>
    </Section>
  );
};

export default HomePage;
