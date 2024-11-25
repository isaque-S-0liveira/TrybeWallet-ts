import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import Wallet from '../../pages/Wallet/Wallet';

describe('Testa se no Wallet', () => {
  it('O email do usuário é renderizado na tela', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira', { user: { email: 'test@email.com' } });
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
});
