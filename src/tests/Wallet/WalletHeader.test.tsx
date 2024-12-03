import { screen } from '@testing-library/react';
import Wallet from '../../pages/Wallet/Wallet';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';

describe('Testa se no Header do componente Wallet', () => {
  it('O email do usuário é renderizado na tela', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira', { user: { email: 'test@email.com' }, wallet: { isLoading: false, error: '', expenses: [] }, _persist: { rehydrated: true, version: -1 } });

    const emails = screen.getAllByTestId('email-field');
    const email = emails[0];
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent('test@email.com');
  });
  it('O total de despesas é renderizado na tela e seu valor inicial é 0', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');
    const totalsExpenses = screen.getAllByTestId('total-field');
    const totalExpenses = totalsExpenses[0];
    expect(totalExpenses).toBeInTheDocument();
    expect(totalExpenses).toHaveTextContent('0');
  });
  it('O campo de moeda é renderizado na tela e seu valor é BRL', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');
    const currencies = screen.getAllByTestId('header-currency-field');
    const currency = currencies[0];
    expect(currency).toBeInTheDocument();
    expect(currency).toHaveTextContent('BRL');
  });
});