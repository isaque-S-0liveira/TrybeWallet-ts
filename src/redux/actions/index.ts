import {
  ExpenseType,
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  SET_USER } from '../../types/ActionsTypes';
import CurrenciesType from '../../types/CurrenciesType';
import { Dispatch } from '../../types/Redux';

export const setUser = (email: string) => ({
  type: SET_USER,
  email,
});

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(expense: ExpenseType) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: {
      expense,
    },
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function addExpense(expense: ExpenseType) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(requestSuccessful({
        ...expense,
        exchangeRates: data,
      }));
    } catch (error) {
      dispatch(requestFailed(error as string));
    }
  };
}
