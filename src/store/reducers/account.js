import * as actionType from "../actions/actionTypes";

const initialState = {
  currencyData: [],
  accountData: [],
  transactionData: [],
  profileData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CURRENCY:
      return {
        ...state,
        currencyData: state.currencyData.concat(action.currency),
      };
    case actionType.GET_ACCOUNT:
      return {
        ...state,
        accountData: state.accountData.concat(action.account),
      };
    case actionType.GET_TRANSACTION:
      return {
        ...state,
        transactionData: state.transactionData.concat(action.transactions),
      };
    case actionType.GET_PERSON:
      return {
        ...state,
        profileData: action.person,
      };
    default:
      return state;
  }
};

export default reducer;
