import React from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
}

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width-device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

const DefaultProps: MetaProps = {
  title: "Gabriel Lara",
  description: "JavaScript/Typescript Full-Stack Developer",
};

Meta.defaultProps = DefaultProps;

export default Meta;
