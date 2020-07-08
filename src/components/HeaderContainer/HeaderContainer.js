import React from "react";
import "./HeaderContainer.css";
import Logo from "../../logo.svg";
const HeaderContainer = (props) => {
  return (
    <header className="header-container">
      <h1>{props.pageName}</h1>
      <button className="paybutton" onClick={props.buttonAction}>
        Create Payment
      </button>
      <div className="header-container-tools">
        <div className="support">
          <img src={Logo} alt="Support" />
          <p>7464</p>
        </div>
        <div className="user-profile">
          <img src={Logo} alt="Logo" />
          <ul>
            <li className="profname">{props.name}</li>
            <li className="profsubname">{props.subName}</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
