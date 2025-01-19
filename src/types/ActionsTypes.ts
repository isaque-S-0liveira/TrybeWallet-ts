export const SET_USER = 'SET_USER';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const START_EDIT_EXPENSE = 'START_EDIT_EXPENSE';
export const END_EDIT_EXPENSE = 'END_EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export type ExchangeRate = {
  name: string;
  ask: string;
};

export type ExpenseType = {
  id: number
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: Record<string, ExchangeRate>;
};
