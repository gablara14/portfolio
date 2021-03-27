import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { CourseCards, CoursesSEO } from "../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={CoursesSEO.title}
        description={CoursesSEO.description}
        backLink="/cv"
      />
      <Grid cards={CourseCards} />
    </>
  );
};

export default CV;
