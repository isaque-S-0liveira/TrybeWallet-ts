import {
  DELETE_EXPENSE,
  END_EDIT_EXPENSE,
  ExpenseType,
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  SET_USER,
  START_EDIT_EXPENSE } from '../../types/ActionsTypes';
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

export function editExpense({ id } : { id: number }) {
  return {
    type: START_EDIT_EXPENSE,
    payload: {
      id,
    },
  };
}

export function endEditExpense(expense: ExpenseType) {
  return {
    type: END_EDIT_EXPENSE,
    payload: {
      expense,
    },
  };
}

export function deleteExpense(id: number) {
  return {
    type: DELETE_EXPENSE,
    payload: {
      id,
    },
  };
}
