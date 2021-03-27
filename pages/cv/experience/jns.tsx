import React from "react";
import Header from "../../../components/Header";
import Grid from "../../../components/Grid";
import { JNSSEO, JNSCARDS } from "../../../data";
import Meta from "../../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${JNSSEO.title} - Gabriel Lara`}
        description={JNSSEO.description}
      />
      <Header
        title={JNSSEO.title}
        description={JNSSEO.description}
        subTitle={JNSSEO.subTitle}
        backLink="/cv/experience"
      />
      <Grid cards={JNSCARDS} />
    </>
  );
};

export default CV;
