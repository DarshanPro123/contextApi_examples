import React from "react";
import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Footer />
    </div>
  );
};

export default Sidebar;
