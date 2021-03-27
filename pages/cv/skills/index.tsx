import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { SkilsSEO, SkillsCards } from "../../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={SkilsSEO.title}
        description={SkilsSEO.description}
        backLink="/cv"
      />
      <Grid cards={SkillsCards} />
    </>
  );
};

export default CV;
