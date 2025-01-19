/* eslint-disable max-len */
import {
  END_EDIT_EXPENSE,
  ExpenseType,
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  START_EDIT_EXPENSE } from '../../types/ActionsTypes';

export interface WalletState {
  editor: boolean,
  idToEdit: number,
  error: string;
  expenses: ExpenseType[];
}
const initialState: WalletState = {
  editor: false,
  idToEdit: 0,
  error: '',
  expenses: [],
};

type ActionType = {
  type: string;
  payload: {
    id: number;
    expense: ExpenseType;
    error: string;
  }
};

export default function wallet(state = initialState, action: ActionType) {
  switch (action.type) {
    case START_EDIT_EXPENSE:
      return {
        ...state,
        editor: !state.editor,
        idToEdit: action.payload.id,
      };
    case END_EDIT_EXPENSE:
      return {
        ...state,
        editor: false,
        idToEdit: 0,
        expenses: state.expenses.map((expense) => { return expense.id === action.payload.expense.id ? action.payload.expense : expense; }),
      };
    case REQUEST_STARTED:
      return {
        ...state,
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        error: '',
        expenses: state.expenses.concat(action.payload.expense),
      };

    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload.error || 'Erro desconhecido',
      };

    default:
      return state;
  }
}
