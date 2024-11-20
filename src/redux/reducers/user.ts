import { SET_USER } from '../../types/ActionsTypes';

// Definição do estado do usuário
export interface UserState {
  email: string;
}

// Estado inicial
const INITIAL_STATE: UserState = {
  email: '',
};

// Definição das ações
interface SetUserAction {
  type: typeof SET_USER;
  email: string;
}

type UserActionTypes = SetUserAction;

// Reducer
export default function user(state = INITIAL_STATE, action: UserActionTypes): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
}
