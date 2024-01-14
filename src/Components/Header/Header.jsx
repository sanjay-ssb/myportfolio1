import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Intro from "./intro";
import WebDeveloper from "./WebDeveloper";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header_intro"><Intro /></div>
        {/* <CTA /> */}
        <div className="me">
          <img src={ME} id="my-img" alt="MyPic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
