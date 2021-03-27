import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { CVCards } from "../../data/cards";
import Meta from "../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title="Currículo - Gabriel Lara"
        description="Experiências profissionais, cursos, certificados e muito mais"
      />
      <Header
        title="Currículo"
        backLink="/"
        description="Experiências profissionais, cursos, certificados e muito mais"
      />
      <Grid cards={CVCards} />
    </>
  );
};

export default CV;
