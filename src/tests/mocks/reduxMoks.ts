import { mockExchangeRates } from './mock';

export const initialState = {
  user: { email: 'test@email.com' },
  wallet: { isLoading: false, error: '', expenses: [], exchangeRates: mockExchangeRates },
  _persist: { rehydrated: true, version: -1 },
};

export const mockExpensesState = [
  {
    id: 1,
    value: '100',
    description: 'Compras do mês',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: mockExchangeRates,
  },
  {
    id: 2,
    value: '200',
    description: 'Viagem',
    currency: 'CAD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    exchangeRates: mockExchangeRates,
  },
];

export const mockValidState = {
  user: { email: 'test@email.com' },
  wallet: {
    editor: false,
    idToEdit: 0,
    error: '',
    expenses: mockExpensesState },
  _persist: { rehydrated: true, version: -1 } };
