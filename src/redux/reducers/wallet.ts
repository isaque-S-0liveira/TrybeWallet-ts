import {
  ExpenseType,
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL } from '../../types/ActionsTypes';

export interface WalletState {
  isLoading: boolean;
  error: string;
  expenses: ExpenseType[];
}

const initialState: WalletState = {
  isLoading: false,
  error: '',
  expenses: [],
};

type ActionType = {
  type: string;
  payload: {
    expense: ExpenseType;
    error: string;
  }
};

export default function wallet(state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        error: '',
        isLoading: false,
        expenses: state.expenses.concat(action.payload.expense),
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || 'Erro desconhecido',
      };

    default:
      return state;
  }
}
