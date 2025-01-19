import { screen, waitFor } from '@testing-library/react';
import Wallet from '../../pages/Wallet/Wallet';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import { getEditDeleteButtonTableExpenseElement, getWalletFormElements } from '../utils/getWalletElements';
import { mockValidState } from '../mocks/reduxMoks';
import { fillAndSubmitExpenseForm } from '../utils/interactions';
import { mockExchangeRates } from '../mocks/mock';

describe('Testa se na Tabela do componente Wallet', () => {
  it('Os campos do header da tabela são renderizados corretamente', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');

    const description = screen.getByRole('columnheader', { name: /descrição/i });
    const tag = screen.getByRole('columnheader', { name: /tag/i });
    const method = screen.getByRole('columnheader', { name: /método de pagamento/i });
    const value = screen.getByTestId('value');
    const currency = screen.getByTestId('currency');
    const exchange = screen.getByRole('columnheader', { name: /câmbio utilizado/i });
    const converted = screen.getByRole('columnheader', { name: /valor convertido/i });
    const currencyName = screen.getByRole('columnheader', { name: /moeda de conversão/i });
    const editOrDelet = screen.getByRole('columnheader', {
      name: /editar\/excluir/i,
    });

    expect(description).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(exchange).toBeInTheDocument();
    expect(converted).toBeInTheDocument();
    expect(currencyName).toBeInTheDocument();
    expect(editOrDelet).toBeInTheDocument();
  });

  it('Os campos do body da tabela são renderizados corretamente', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira', mockValidState);

    const description = screen.getByRole('cell', { name: /compras do mês/i });
    const tag1 = screen.getByRole('cell', { name: /alimentação/i });
    const tag2 = screen.getByRole('cell', { name: /viagem/i });
    const method1 = screen.getByRole('cell', { name: /dinheiro/i });
    const method2 = screen.getByRole('cell', { name: /cartão de crédito/i });
    const value1 = screen.getByRole('cell', { name: /100/i });
    const value2 = screen.getByRole('cell', { name: /200/i });
    const currency1 = screen.getByRole('cell', { name: /Dólar Americano/i });
    const currency2 = screen.getByRole('cell', { name: /Dólar Canadense/i });
    const exchange1 = screen.getByRole('cell', { name: /5.79/i });
    const exchange2 = screen.getByRole('cell', { name: /4.11/i });
    const converted1 = screen.getByRole('cell', { name: /579.24/i });
    const converted2 = screen.getByRole('cell', { name: /822.46/i });
    const currencyCells = screen.getAllByRole('cell', { name: /real/i });
    const edit = screen.getAllByRole('button', { name: /edit/i });
    const delet = screen.getAllByRole('button', { name: /delete/i });

    expect(currencyCells).toHaveLength(2);
    expect(edit).toHaveLength(2);
    expect(delet).toHaveLength(2);
    expect(description).toBeInTheDocument();
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(method1).toBeInTheDocument();
    expect(method2).toBeInTheDocument();
    expect(value1).toBeInTheDocument();
    expect(value2).toBeInTheDocument();
    expect(currency1).toBeInTheDocument();
    expect(currency2).toBeInTheDocument();
    expect(exchange1).toBeInTheDocument();
    expect(exchange2).toBeInTheDocument();
    expect(converted1).toBeInTheDocument();
    expect(converted2).toBeInTheDocument();
  });

  it.only('testa se ao editar uma despesa, a edição é refletida na tabela', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira', mockValidState);

    const { editExpenseButton } = getEditDeleteButtonTableExpenseElement();

    await user.click(editExpenseButton[0]);

    await fillAndSubmitExpenseForm(user, getWalletFormElements(), {
      id: 1,
      description: 'Uber',
      value: '220',
      currency: 'CAD',
      tag: 'Transporte',
      method: 'Cartão de débito',
      exchangeRates: mockExchangeRates,
    });

    await waitFor(() => {
      expect(screen.queryByRole('cell', { name: /compras do mês$/i })).not.toBeInTheDocument();
      expect(screen.getByRole('cell', { name: /uber/i })).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /alimentação/i })).not.toBeInTheDocument();
      expect(screen.getByRole('cell', { name: /transporte/i })).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /dinheiro/i })).not.toBeInTheDocument();
      expect(screen.getByRole('cell', { name: /cartão de débito/i })).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /100/i })).not.toBeInTheDocument();
      expect(screen.getByRole('cell', { name: /220/i })).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /Dólar Americano/i })).not.toBeInTheDocument();
      expect(screen.getAllByRole('cell', { name: /Dólar Canadense/i })[0]).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /5.79/i })).not.toBeInTheDocument();
      expect(screen.getAllByRole('cell', { name: /4.11/i })[0]).toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /579.24/i })).not.toBeInTheDocument();
      expect(screen.getAllByRole('cell', { name: /904,71/i })[0]).toBeInTheDocument();
    });
  });

  it('testa se ao deletar uma despesa, a despesa é removida da tabela', async () => {
    const { user } = renderWithRouterAndRedux(<Wallet />, '/carteira', mockValidState);

    // const { deleteExpenseButton } = getEditTableExpenseElement();

    // await user.click(deleteExpenseButton[0]);

    await waitFor(() => {
      expect(screen.queryByRole('cell', { name: /compras do mês$/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /alimentação/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /dinheiro/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /100/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /Dólar Americano/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /5.79/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('cell', { name: /579.24/i })).not.toBeInTheDocument();
    });
  });
});
