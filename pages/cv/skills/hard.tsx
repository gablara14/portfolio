import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { HardSkillsSEO, HardSkillsCards } from "../../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={HardSkillsSEO.title}
        description={HardSkillsSEO.description}
        backLink="/cv/skills"
      />
      <Grid cards={HardSkillsCards} />
    </>
  );
};

export default CV;
