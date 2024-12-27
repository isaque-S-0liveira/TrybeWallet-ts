import { screen } from '@testing-library/react';
import Wallet from '../../pages/Wallet/Wallet';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import { mockState } from '../mocks/mock';

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
    renderWithRouterAndRedux(<Wallet />, '/carteira', { user: { email: '' },
      wallet: {
        isLoading: false,
        error: '',
        expenses: mockState },
      _persist: { rehydrated: true, version: -1 } });

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
});
