import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { CertificatesCards } from "../../data";
import Meta from "../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title="Certificados - Gabriel Lara"
        description="Meus certificados - Gabriel Lara"
      />
      <Header
        title="Certificados"
        description="Meus certificados"
        backLink="/cv"
      />
      <Grid cards={CertificatesCards} />
    </>
  );
};

export default CV;
