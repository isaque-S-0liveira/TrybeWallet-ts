/* eslint-disable sonarjs/no-duplicate-string */
import { waitFor } from '@testing-library/react';
import { it, vi } from 'vitest';
import { mockData, mockExchangeRates } from '../mocks/mock';
import { getEditTableExpenseElement, getWalletFormElements } from '../utils/getWalletElements';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import Wallet from '../../pages/Wallet/Wallet';
import { mockExpensesState } from '../mocks/reduxMoks';
import { fillAndSubmitExpenseForm } from '../utils/interactions';

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

  it('Testa se ao clicar no botão as informações são guardas no estado global do redux', async () => {
    const { user, store } = renderWithRouterAndRedux(<Wallet />, '/carteira');

    await fillAndSubmitExpenseForm(user, getWalletFormElements(), mockExpensesState[0]);

    await waitFor(() => {
      expect(store.getState().wallet.expenses).toHaveLength(1);
      expect(store.getState().wallet.expenses[0]).toEqual({
        id: 1,
        value: '100',
        description: comprasDoMes,
        method: 'Dinheiro',
        currency: 'USD',
        tag: tagAlimentacao,
        exchangeRates: mockExchangeRates,
      });
    });
  });
  it('Testa se novas despesas são adicionadas corretamente no array exepenses do estado global do redux', async () => {
    const { user, store } = renderWithRouterAndRedux(<Wallet />, '/carteira', { user: { email: '' },
      wallet: {
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
        ],
        editor: false,
        idToEdit: 0,
      },
      _persist: { rehydrated: true, version: -1 } });

    await fillAndSubmitExpenseForm(user, getWalletFormElements(), mockExpensesState[1]);

    await waitFor(() => {
      expect(store.getState().wallet.expenses).toHaveLength(2);
      expect(store.getState().wallet.expenses).toEqual(mockExpensesState);
    });
  });
  // it.fails('Testa se ao clicar no botão de Editar a despesa é editada corretamente no estado global do redux', async () => {});
});
