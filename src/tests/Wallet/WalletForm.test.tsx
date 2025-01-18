/* eslint-disable sonarjs/no-duplicate-string */
import { screen, waitFor } from '@testing-library/react';
import { it, vi } from 'vitest';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import Wallet from '../../pages/Wallet/Wallet';
import { mockData, mockValidState, SelectCurrencyOptions } from '../mocks/mock';
import { getEditFormExpenseElement, getEditTableExpenseElement, getWalletFormElements } from '../utils/getWalletElements';

describe('Testa se no WalletForm', () => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => mockData,
  } as Response;

  const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
  afterEach(() => vi.clearAllMocks());

  it('Existe um formulário para adicionar: valor, descrição, moeda, método de pagamento, tag e botão de adicionar despesa', async () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');
    const { currencyInput, valueInput, descriptionInput, paymentMethodInput, tagInput, addExpenseButton } = getWalletFormElements();

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(paymentMethodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();
  });
  it('Testa se é feita uma requisição para a API de moedas ao montar o componente', async () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
  });

  it('Testa se as moedas são renderizadas no input corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');

    const currencies = screen.getByTestId('currency-input') as HTMLSelectElement;
    await waitFor(() => {
      const options = Array.from(currencies.options);
      const optionTexts = options.map((option) => option.textContent);

      expect(optionTexts).toEqual(SelectCurrencyOptions);
    });
  });
  it('Testa se o botão de adicionar despesa está desabilitado quando algum campo não é preenchido', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');
    const { addExpenseButton } = getWalletFormElements();
    expect(addExpenseButton).toBeDisabled();
  });
  it('Testa se o botão de adicionar despesa está habilitado quando todos os campos são preenchidos', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira');
    const { currencyInput, valueInput, descriptionInput, paymentMethodInput, tagInput, addExpenseButton } = getWalletFormElements();

    await user.type(valueInput, '100');
    await user.type(descriptionInput, 'Compras do mês');
    await user.selectOptions(currencyInput, 'USD');
    await user.selectOptions(paymentMethodInput, 'Dinheiro');
    await user.selectOptions(tagInput, 'Alimentação');
    expect(addExpenseButton).not.toBeDisabled();
  });

  it('Testa se ao clicar no botão de adicionar despesa, todos os campos são limpos', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira');
    const { currencyInput, valueInput, descriptionInput, paymentMethodInput, tagInput, addExpenseButton } = getWalletFormElements();

    await user.type(valueInput, '100');
    await user.type(descriptionInput, 'Compras do mês');
    await user.selectOptions(currencyInput, 'USD');
    await user.selectOptions(paymentMethodInput, 'Dinheiro');
    await user.selectOptions(tagInput, 'Alimentação');
    user.click(addExpenseButton);

    await waitFor(() => {
      expect(valueInput).toHaveValue(0);
      expect(descriptionInput).toHaveValue('');
      expect(currencyInput).toHaveValue('USD');
      expect(paymentMethodInput).toHaveValue('Dinheiro');
      expect(tagInput).toHaveValue('Alimentação');
    });
  });
  it('Testa se ao clicar no botão de editar despesa o formulário é preenchido com as informações da despesa que será editada', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira', mockValidState);
    const { editExpenseButton } = getEditTableExpenseElement();
    const { valueInput, descriptionInput, currencyInput, paymentMethodInput, tagInput } = getWalletFormElements();

    await user.click(editExpenseButton[1]);

    const { editExpenseFormButton } = getEditFormExpenseElement();

    await waitFor(() => {
      expect(descriptionInput).toHaveValue('Viagem');
      expect(valueInput).toHaveValue(200);
      expect(currencyInput).toHaveValue('CAD');
      expect(paymentMethodInput).toHaveValue('Cartão de crédito');
      expect(tagInput).toHaveValue('Lazer');
      expect(editExpenseFormButton).toBeInTheDocument();
    });
  });
  it('Testa se ao clicar no botão de editar despesa o botão de adicionar despesa é substituído pelo botão adicionar despesa e o formulário volta ao formato padrão', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira', mockValidState);
    const { editExpenseButton } = getEditTableExpenseElement();
    const { valueInput, descriptionInput, currencyInput, paymentMethodInput, tagInput } = getWalletFormElements();

    await user.click(editExpenseButton[1]);

    const { editExpenseFormButton } = getEditFormExpenseElement();

    await waitFor(() => {
      expect(editExpenseFormButton).toBeInTheDocument();
    });

    await user.click(editExpenseFormButton);

    await waitFor(() => {
      expect(valueInput).toHaveValue(0);
      expect(descriptionInput).toHaveValue('');
      expect(currencyInput).toHaveValue('USD');
      expect(paymentMethodInput).toHaveValue('Dinheiro');
      expect(tagInput).toHaveValue('Alimentação');
    });
  });
});
