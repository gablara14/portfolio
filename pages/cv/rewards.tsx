import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { RewardsCards, RewardsSEO } from "../../data";

const CV: React.FC = () => {
  return (
    <>
      <Header
        title={RewardsSEO.title}
        description={RewardsSEO.description}
        backLink="/cv"
      />
      <Grid cards={RewardsCards} />
    </>
  );
};

export default CV;
