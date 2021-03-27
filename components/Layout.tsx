import React from "react";
import styles from "../styles/Layout.module.css";
import Meta from "./Meta";
import { HomeSEO } from "../data";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta title={HomeSEO.title} description={HomeSEO.description} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
