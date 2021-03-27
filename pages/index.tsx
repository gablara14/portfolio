import React from "react";
import Header from "../components/Header";
import Grid from "../components/Grid";
import { HomeCards, HomeSEO } from "../data";

const Home: React.FC = () => {
  return (
    <>
      <Header
        title={HomeSEO.title}
        description={HomeSEO.description}
        imageSrc="https://avatars.githubusercontent.com/u/69282928?s=460&u=b09b941c7904e8f28151dd737c4cb2ba8f4d1087&v=4"
      />
      <Grid cards={HomeCards} />
    </>
  );
};

export default Home;
