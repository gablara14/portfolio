import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { SkilsSEO, SkillsCards } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${SkilsSEO.title} - Gabriel Lara`}
        description={SkilsSEO.description}
      />
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
