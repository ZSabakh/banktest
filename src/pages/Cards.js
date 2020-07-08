import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Logo from "../logo.svg";
import Mastercard from "../assets/mastercard-classic.png";
import Visa from "../assets/Visa-Classic.jpg";
import "./Cards.css";

function Cards(props) {
  useEffect(() => {}, []);

  let cards = Logo;

  if (props.cardsData) {
    cards = props.cardsData.map((card) => {
      let src = null;
      if (card.type === "VISA") {
        src = Visa;
      }
      if (card.type === "MASTERCARD") {
        src = Mastercard;
      }
      return (
        <div className="cards">
          <img src={src} />
          <ul>
            <li>
              <h2>{card.type}</h2>
            </li>
            <li>
              <p>{card.name}</p>
            </li>
            <li>
              <p>EXPIRY: {card.expire_date}</p>
            </li>
          </ul>
          <h3>{card.card_class}</h3>
        </div>
      );
    });
  }

  return (
    <div id="content">
      <div className="left">
        <div className="cards">
          <img src={Logo}></img>
          <ul>
            <li>
              <h2>Card</h2>
            </li>
            <li>
              <p>Number and validity</p>
            </li>
          </ul>
        </div>
        {cards}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currencyData: state.account.currencyData,
    accountData: state.account.accountData,
    transactionData: state.account.transactionData,
    profileData: state.account.profileData,
    cardsData: state.account.cardsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
//Was withrouter should return it
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cards));
