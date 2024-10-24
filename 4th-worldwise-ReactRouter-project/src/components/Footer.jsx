import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        &copy; Copyright {new Date().getFullYear()} WorldWise Inc
      </p>
    </footer>
  );
};

export default Footer;
