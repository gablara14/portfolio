import React from "react";
import headerStyles from "../styles/Header.module.css";

interface HeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, imageSrc }) => {
  return (
    <>
      {imageSrc ? <img src={imageSrc} className={headerStyles.myimage} /> : ""}
      <div className={headerStyles.seoContainer}>
        <h1 className={headerStyles.title}>{title}</h1>
        <p className={headerStyles.description}>{description}</p>
      </div>
    </>
  );
};

export default Header;
