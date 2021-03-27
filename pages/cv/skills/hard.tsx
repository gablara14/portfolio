import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { HardSkillsSEO, HardSkillsCards } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${HardSkillsSEO.title} - Gabriel Lara`}
        description={HardSkillsSEO.description}
      />
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
