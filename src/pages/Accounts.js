import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { GetData } from "../services/GetData";
import HeaderContainer from "../components/HeaderContainer/HeaderContainer";
import { withRouter } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

function Accounts(props) {
  const [modal, setModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(0);

  useEffect(() => {}, []);

  //LOGOUT MANAGER ! NOT DONE YET
  // function logout() {
  //     sessionStorage.setItem('token', '');
  //     sessionStorage.clear();
  // }

  let currencies = null;

  const cutCur = props.currencyData.slice(1, 5);

  currencies = cutCur.map((currenc) => {
    return (
      <div className="CurrencyInfo" key={currenc.currency}>
        <img src={currenc.currencyCountryFlag} alt="Flag" />
        <ul>
          <li>{currenc.currency}</li>
          <li>{currenc.currencyName}</li>
        </ul>
        <p className="currencbuy">{currenc.buyRate}</p>
        <p className="currencsell">{currenc.sellRate}</p>
      </div>
    );
  });

  let transactions = null;

  //METHOD TO CHANGE MODAL DISPLAY STATES !
  const modalDisplay = (id) => {
    setSelectedTransaction(id - 1);
    setModal(true);
  };
  const modalHide = () => {
    setModal(false);
    setSelectedTransaction(0);
  };
  //END OF MODAL DISPLAY STATE CHANGE
  if (props.transactionData[0]) {
    const cutCur2 = props.transactionData[0].data;

    transactions = cutCur2.map((transac) => {
      // var date = transac.transaction_date.slice(0, -8)
      return (
        <tr onClick={() => modalDisplay(transac.id)} key={transac.id}>
          <td>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
            </svg>
          </td>
          <td>{transac.transactionDisplayDate}</td>
          <td>{transac.categoryInfo[0].title}</td>
          <td>{+transac.amount / 100}$</td>
        </tr>
      );
    });
  }

  let bdata = null;
  const cutCur1 = props.accountData;
  bdata = cutCur1.map((bdataa) => {
    return (
      <div className="AccountInfo" key={bdataa.id}>
        <ul>
          <li>{bdataa.friendlyName}</li>
          <li>{bdataa.iban}</li>
        </ul>
        <p>
          <i>{+bdataa.availableBalance / 100}</i> {bdataa.primaryCurrency}
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      {/* BACKDROP TEST FOR MESSAGE */}
      {props.transactionData[0] ? (
        <Modal
          show={modal}
          modalClosed={modalHide}
          title={"Transaction details"}
        >
          <p>
            Transaction date:{" "}
            <i>
              {
                props.transactionData[0].data[selectedTransaction]
                  .transaction_date
              }
            </i>
          </p>
          <p>
            Client account number:{" "}
            <i>
              {
                props.transactionData[0].data[selectedTransaction]
                  .client_account_number
              }
            </i>
          </p>
          <p>
            Description:{" "}
            <i>
              {
                props.transactionData[0].data[selectedTransaction]
                  .categoryInfo[0].description
              }
              / {props.transactionData[0].data[selectedTransaction].description}
            </i>
          </p>
          <p>
            Currency:{" "}
            <i>{props.transactionData[0].data[selectedTransaction].currency}</i>
          </p>
        </Modal>
      ) : null}

      {/* BACKDROP TEST FOR MESSAGE END*/}
      <div id="content">
        <div className="right">
          <div className="CurrencyHolder">
            <div className="CurrencyHolderTitle">
              <p>Exchange Rates of NBG</p>
            </div>
            <div className="CurrencyInfo">
              <img
                src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
                alt="flag"
              ></img>
              <ul>
                <li>USD</li>
                <li>One US Dollar</li>
              </ul>
              <p className="currencbuy">2.322</p>
              <p className="currencsell">2.420</p>
            </div>
            {currencies}
          </div>
        </div>
        <div className="left">
          <div className="AccountHolder">
            <div className="CurrencyHolderTitle">
              <p>My Accounts</p>
            </div>

            <div className="AccountInfo">
              <ul>
                <li>Current</li>
                <li>GE000850514231GEL</li>
              </ul>
              <p>
                <i>20,523</i> USD
              </p>
            </div>
            {bdata}
          </div>

          <div className="AccountHolder">
            <div className="CurrencyHolderTitle">
              <p>Transactions</p>
            </div>

            <div>
              <table>
                <tbody>
                  <tr className="tableHead">
                    <th>Status</th>
                    <th>Date</th>
                    <th>Note</th>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
                      </svg>
                    </td>
                    <td>20 JUL 2020</td>
                    <td>Wire Transfer Fee / თანხის გადარიცხვის საკომისიო</td>
                    <td>-5.00$</td>
                  </tr>
                  {transactions}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
//Was withrouter should return it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Accounts));
