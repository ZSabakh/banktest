import * as actionTypes from "./actionTypes";
import { GetData } from "../../services/GetData";

export const getCurrency = (res) => {
  return {
    type: actionTypes.GET_CURRENCY,
    currency: res,
  };
};

export const get_currency = () => {
  return (dispatch) => {
    GetData("rates/CurrencyRates").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        dispatch(getCurrency(responseJson));
      } else {
        console.log(result);
        console.log("Login Error");
      }
    });
  };
  //ASYNCHRONOUS CODE !
};

export const getAccount = (res) => {
  return {
    type: actionTypes.GET_ACCOUNT,
    account: res,
  };
};

export const get_account = () => {
  return (dispatch) => {
    GetData("accounts").then((result1) => {
      let responseJson1 = result1;
      if (!responseJson1.error) {
        dispatch(getAccount(responseJson1));
      } else {
        console.log(result1);
        console.log("Login Error");
      }
    });
  };
  //ASYNCHRONOUS CODE !
};

export const getTransactions = (res) => {
  return {
    type: actionTypes.GET_TRANSACTION,
    transactions: res,
  };
};

export const get_transactions = () => {
  return (dispatch) => {
    GetData("transactions/history").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        dispatch(getTransactions(responseJson));
      } else {
        console.log(result);
        console.log("Login Error");
      }
    });
  };
  //ASYNCHRONOUS CODE !
};

export const getProfile = (res) => {
  return {
    type: actionTypes.GET_PERSON,
    person: res,
  };
};

export const get_profile = () => {
  return (dispatch) => {
    GetData("profile").then((result) => {
      let responseJson = result;
      if (!responseJson.error) {
        dispatch(getProfile(responseJson));
      } else {
        console.log(result);
        console.log("Login Error");
      }
    });
  };
  //ASYNCHRONOUS CODE !
};
