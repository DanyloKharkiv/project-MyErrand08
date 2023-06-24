import React from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Section } from "./HomePage.Styled";

const HomePage = () => {
  return (
    <Section>
      <Sidebar />
      <div>
        <Header />
        <div>screensPage</div>
      </div>
    </Section>
  );
};

export default HomePage;
