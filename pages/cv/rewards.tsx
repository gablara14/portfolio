import React from "react";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { RewardsCards, RewardsSEO } from "../../data";
import Meta from "../../components/Meta";

const CV: React.FC = () => {
  return (
    <>
      <Meta
        title={`${RewardsSEO.title} - Gabriel Lara`}
        description={RewardsSEO.description}
      />
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
