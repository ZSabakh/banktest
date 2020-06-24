import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GetData } from "./services/GetData";
import SideMenu from "./components/SideMenu/SideMenu";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const [redirect, setRedirect] = useState(false);
  const [currencyData, setCurrencyData] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [profileData, setProfileData] = useState({});
  console.log(transactionData);

  useEffect(() => {
    GetData("transactions/history").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        console.log(responseJson);
        setTransactionData(responseJson);
      } else {
        console.log(result);
        //Method to log out user in case token is expired/invalid. Not finished yet
        sessionStorage.removeItem("token");
        props.history.push("/login");
        //End yet
        console.log("Login Error");
      }
    });

    GetData("profile").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        console.log(responseJson);
        setProfileData(responseJson);
      } else {
        console.log(result);
        console.log("Login Error");
      }
    });

    GetData("rates/CurrencyRates").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        console.log(responseJson);
        setCurrencyData(responseJson);
      } else {
        console.log(result);
        console.log("Login Error");
      }
    });

    GetData("accounts").then((result1) => {
      let responseJson1 = result1;
      if (!responseJson1.error) {
        console.log(responseJson1);
        setAccountData(responseJson1);
      } else {
        console.log(result1);
        setRedirect(true);
        console.log("Login Error");
      }
    });
    if (!sessionStorage.getItem("token")) {
      setRedirect(false);
    }
  }, []);

  //LOGOUT MANAGER ! NOT DONE YET
  // function logout() {
  //     sessionStorage.setItem('token', '');
  //     sessionStorage.clear();
  // }

  let currencies = null;
  const cutCur = currencyData.slice(0, 4);
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
  if (transactionData.data) {
    const cutCur2 = transactionData.data;
    transactions = cutCur2.map((transac) => {
      // var date = transac.transaction_date.slice(0, -8)

      return (
        <tr onClick={"TO BE UPDATED"}>
          <td>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
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
  const cutCur1 = accountData;
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

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className="App">
      <Router>
        <SideMenu />

        <div id="content">
          {profileData.user ? (
            <HeaderContainer
              name={profileData.user.name}
              subName={profileData.user.lastname}
            />
          ) : (
            <HeaderContainer name="Loading" subName="Mr Loading :)" />
          )}

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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
                      </svg>
                    </td>
                    <td>20 JUL 2020</td>
                    <td>Wire Transfer Fee / თანხის გადარიცხვის საკომისიო</td>
                    <td>-5.00$</td>
                  </tr>
                  {transactions}
                </table>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default withRouter(Dashboard);
