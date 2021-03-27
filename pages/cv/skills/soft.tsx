import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { SoftSkillsSEO, SoftSkillsCards } from "../../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={SoftSkillsSEO.title}
        description={SoftSkillsSEO.description}
        backLink="/cv/skills"
      />
      <Grid cards={SoftSkillsCards} />
    </>
  );
};

export default CV;
