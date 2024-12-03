import { waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { mockData, mockExchangeRates } from '../mocks/mock';
import getWalletFormElements from '../utils/getWalletFormElements';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import Wallet from '../../pages/Wallet/Wallet';

describe('Testes wallet redux', () => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => mockData,
  } as Response;

  vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

  afterEach(() => vi.clearAllMocks());

  const comprasDoMes = 'Compras do mês';
  const tagAlimentacao = 'Alimentação';

  it.only('Testa se ao clicar no botão as informações são guardas no estado global do redux', async () => {
    const { user, store } = renderWithRouterAndRedux(<Wallet />, '/carteira');
    const { currencyInput, valueInput, descriptionInput, paymentMethodInput, tagInput, addExpenseButton } = getWalletFormElements();

    await user.type(valueInput, '100');
    await user.type(descriptionInput, comprasDoMes);
    await user.selectOptions(currencyInput, 'USD');
    await user.selectOptions(tagInput, tagAlimentacao);
    await user.selectOptions(paymentMethodInput, 'Dinheiro');
    await user.selectOptions(tagInput, 'Alimentação');
    await user.click(addExpenseButton);

    await waitFor(() => {
      expect(store.getState().wallet.expenses).toHaveLength(1);
      expect(store.getState().wallet.expenses[0]).toEqual({
        id: 0,
        value: '100',
        description: comprasDoMes,
        method: 'Dinheiro',
        currency: 'USD',
        tag: tagAlimentacao,
        exchangeRates: mockExchangeRates,
      });
    });
  });
  it.only('Testa se novas despesas são adicionadas corretamente no array exepenses do estado global do redux', async () => {
    const { user, store } = renderWithRouterAndRedux(<Wallet />, '/carteira', { user: { email: '' },
      wallet: {
        isLoading: false,
        error: '',
        expenses: [
          {
            id: 0,
            value: '100',
            description: comprasDoMes,
            currency: 'USD',
            method: 'Dinheiro',
            tag: tagAlimentacao,
            exchangeRates: mockExchangeRates,
          },
        ] },
      _persist: { rehydrated: true, version: -1 } });

    const { currencyInput, valueInput, descriptionInput, paymentMethodInput, tagInput, addExpenseButton } = getWalletFormElements();

    await user.type(descriptionInput, 'Viagem');
    await user.type(valueInput, '200');
    await user.selectOptions(currencyInput, 'CAD');
    await user.selectOptions(paymentMethodInput, 'Cartão de crédito');
    await user.selectOptions(tagInput, 'Lazer');

    await user.click(addExpenseButton);

    await waitFor(() => {
      expect(store.getState().wallet.expenses).toHaveLength(2);
      expect(store.getState().wallet.expenses).toEqual([
        {
          id: 0,
          value: '100',
          description: comprasDoMes,
          currency: 'USD',
          method: 'Dinheiro',
          tag: tagAlimentacao,
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
      ]);
    });
  });
});
