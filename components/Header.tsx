import React from "react";
import headerStyles from "../styles/Header.module.css";
import Link from "next/link";
interface HeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
  backLink?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  imageSrc,
  backLink,
}) => {
  return (
    <>
      {backLink ? (
        <div className={headerStyles.backButtonContainer}>
          <Link href={backLink}>
            <img src="/back.png" alt="" className={headerStyles.backButton} />
          </Link>
        </div>
      ) : null}

      {imageSrc ? <img src={imageSrc} className={headerStyles.myimage} /> : ""}
      <div className={headerStyles.seoContainer}>
        <h1 className={headerStyles.title}>{title}</h1>
        <p className={headerStyles.description}>{description}</p>
      </div>
    </>
  );
};

export default Header;
