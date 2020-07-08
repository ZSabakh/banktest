import * as actionType from "../actions/actionTypes";

const initialState = {
  currencyData: [],
  accountData: [],
  transactionData: [],
  cardsData: [],
  profileData: {},
  authorized: false,
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
        accountData: action.account,
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
    case actionType.GET_AUTHORIZED:
      return {
        ...state,
        authorized: action.authorized,
      };
    case actionType.AUTHORIZE:
      return {
        ...state,
        authorized: action.authorized,
      };
    case actionType.GET_CARDS:
      return {
        ...state,
        cardsData: action.cards,
      };
    default:
      return state;
  }
};

export default reducer;
