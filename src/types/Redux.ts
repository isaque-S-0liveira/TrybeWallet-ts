import { UnknownAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WalletState } from '../redux/reducers/wallet';
import { UserState } from '../redux/reducers/user';

export type ReduxState = {
  user: UserState;
  wallet: WalletState;
};

export type Dispatch = ThunkDispatch<ReduxState, null, UnknownAction>;
