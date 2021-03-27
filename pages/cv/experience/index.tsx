import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { ExperienceSEO, ExperienceCards } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${ExperienceSEO.title} - Gabriel Lara`}
        description={ExperienceSEO.description}
      />
      <Header
        title={ExperienceSEO.title}
        description={ExperienceSEO.description}
        backLink="/cv"
      />
      <Grid cards={ExperienceCards} />
    </>
  );
};

export default CV;
