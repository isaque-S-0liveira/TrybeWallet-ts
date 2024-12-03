export const SET_USER = 'SET_USER';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export type ExpenseType = {
  id: number
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: object;
};
