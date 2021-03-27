import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { CourseCards, CoursesSEO } from "../../data";
import Meta from "../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${CoursesSEO.title} - Gabriel Lara`}
        description={CoursesSEO.description}
      />
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
