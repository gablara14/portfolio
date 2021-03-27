import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { SoftSkillsSEO, SoftSkillsCards } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${SoftSkillsSEO.title} - Gabriel Lara`}
        description={SoftSkillsSEO.description}
      />
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
