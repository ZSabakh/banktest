import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import { withRouter, useRouteMatch } from "react-router-dom";
import Accounts from "./Accounts";
import Cards from "./Cards";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
import Modal from "../components/Modal/Modal";
import HeaderContainer from "../components/HeaderContainer/HeaderContainer";

function Dashboard(props) {
  useEffect(() => {
    props.GetAuthorized();
    if (!sessionStorage.getItem("token")) {
      props.history.push("/login");
    }
    props.GetTransactions();
    props.GetCurrency();
    props.GetAccount();
    props.GetProfile();
    props.GetCards();
  }, []);

  let match = useRouteMatch();

  return (
    <div className="App">
      <SideMenu />
      {props.profileData.user ? (
        <HeaderContainer
          pageName={props.location.pathname.substring("/dashboard/".length)}
          name={props.profileData.user.name}
          subName={props.profileData.user.lastname}
        />
      ) : (
        <HeaderContainer name="Loading" subName="Mr Loading :)" />
      )}
      {!props.authorized ? (
        <Modal show={true} title={"TOKEN ERROR"}>
          <button onClick={() => props.history.push("/login")}>
            Return to login page
          </button>
        </Modal>
      ) : null}

      <Switch>
        <Route path={`${match.path}/accounts`} component={Accounts} />
        <Route path={`${match.path}/cards`} component={Cards} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authorized: state.account.authorized,
    profileData: state.account.profileData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAuthorized: () => dispatch(actionCreators.get_authorized()),
    GetCards: () => dispatch(actionCreators.get_cards()),
    GetCurrency: () => dispatch(actionCreators.get_currency()),
    GetAccount: () => dispatch(actionCreators.get_account()),
    GetTransactions: () => dispatch(actionCreators.get_transactions()),
    GetProfile: () => dispatch(actionCreators.get_profile()),
  };
};
//Was withrouter should return it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
