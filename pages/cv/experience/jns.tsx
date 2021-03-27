import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { JNSSEO, JNSCARDS } from "../../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={JNSSEO.title}
        description={JNSSEO.description}
        backLink="/cv/experience"
      />
      <Grid cards={JNSCARDS} />
    </>
  );
};

export default CV;
