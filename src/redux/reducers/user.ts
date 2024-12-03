import { SET_USER } from '../../types/ActionsTypes';

export interface UserState {
  email: string;
}

const INITIAL_STATE: UserState = {
  email: '',
};
interface SetUserAction {
  type: typeof SET_USER;
  email: string;
}

type UserActionTypes = SetUserAction;

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
