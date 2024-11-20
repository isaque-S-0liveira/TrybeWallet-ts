import { SET_USER } from '../../types/ActionsTypes';

// ACTIONS CREATORS
export const setUser = (email: string) => ({
  type: SET_USER,
  email,
});
