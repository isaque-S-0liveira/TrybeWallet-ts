import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import user, { UserState } from './user';
import wallet, { WalletState } from './wallet';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'wallet'],
};

const rootReducer = combineReducers({
  user: user as (state: UserState, action: any) => UserState,
  wallet: wallet as (state: WalletState, action: any) => WalletState,
});

export default persistReducer(persistConfig, rootReducer);
