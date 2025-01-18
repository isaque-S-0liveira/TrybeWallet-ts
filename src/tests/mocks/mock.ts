export const mockData = {
  USD: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Americano/Real Brasileiro',
    high: '5.8278',
    low: '5.7749',
    varBid: '-0.0065',
    pctChange: '-0.11',
    bid: '5.7913',
    ask: '5.7924',
    timestamp: '1732628375',
    create_date: '2024-11-26 10:39:35',
  },
  USDT: {
    code: 'USD',
    codein: 'BRLT',
    name: 'Dólar Americano/Real Brasileiro Turismo',
    high: '5.85',
    low: '5.79',
    varBid: '-0.015',
    pctChange: '-0.26',
    bid: '5.65',
    ask: '6',
    timestamp: '1732628160',
    create_date: '2024-11-26 10:36:00',
  },
  CAD: {
    code: 'CAD',
    codein: 'BRL',
    name: 'Dólar Canadense/Real Brasileiro',
    high: '4.1486',
    low: '4.0912',
    varBid: '-0.0387',
    pctChange: '-0.93',
    bid: '4.1023',
    ask: '4.1123',
    timestamp: '1732628380',
    create_date: '2024-11-26 10:39:40',
  },
};

export const SelectCurrencyOptions = Object.keys(mockData).filter((c) => c !== 'USDT');

export const mockExchangeRates = {
  USD: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Americano/Real Brasileiro',
    high: '5.8278',
    low: '5.7749',
    varBid: '-0.0065',
    pctChange: '-0.11',
    bid: '5.7913',
    ask: '5.7924',
    timestamp: '1732628375',
    create_date: '2024-11-26 10:39:35',
  },
  CAD: {
    code: 'CAD',
    codein: 'BRL',
    name: 'Dólar Canadense/Real Brasileiro',
    high: '4.1486',
    low: '4.0912',
    varBid: '-0.0387',
    pctChange: '-0.93',
    bid: '4.1023',
    ask: '4.1123',
    timestamp: '1732628380',
    create_date: '2024-11-26 10:39:40',
  },
};

export const initialState = {
  user: { email: 'test@email.com' },
  wallet: { isLoading: false, error: '', expenses: [], exchangeRates: mockExchangeRates },
  _persist: { rehydrated: true, version: -1 },
};

export const mockExpensesState = [
  {
    id: 0,
    value: '100',
    description: 'Compras do mês',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: mockExchangeRates,
  },
  {
    id: 1,
    value: '200',
    description: 'Viagem',
    currency: 'CAD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    exchangeRates: mockExchangeRates,
  },
];

export const mockValidState = {
  user: { email: '' },
  wallet: {
    editor: false,
    idToEdit: 0,
    error: '',
    expenses: mockExpensesState },
  _persist: { rehydrated: true, version: -1 } };
