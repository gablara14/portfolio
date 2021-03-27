import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { LanguageSEO, LanguageCards } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${LanguageSEO.title} - Gabriel Lara`}
        description={LanguageSEO.description}
      />
      <Header
        title={LanguageSEO.title}
        description={LanguageSEO.description}
        backLink="/cv/skills"
      />
      <Grid cards={LanguageCards} />
    </>
  );
};

export default CV;
