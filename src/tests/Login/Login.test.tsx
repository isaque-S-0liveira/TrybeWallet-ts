import { screen } from '@testing-library/react';
import Login from '../../pages/Login/Login';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';

describe('Testa se no Login', () => {
  const BUTTON_ID = 'login-submit-button';
  const EMAIL_INPUT_ID = 'email-input';
  const PASSWORD_INPUT_ID = 'password-input';
  const VALID_EMAIL = 'email@test.com';

  it('Existem os input de email, senha e o botão entrar ', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const button = screen.getByTestId(BUTTON_ID);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('O botão está desabilitado inicialmente', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByTestId(BUTTON_ID);

    expect(button).toBeDisabled();
  });

  it('O botão está habilitado após preencher email e senha corretamente', async () => {
    const { user } = renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const button = screen.getByTestId(BUTTON_ID);

    expect(button).toBeDisabled();

    await user.type(emailInput, VALID_EMAIL);
    await user.type(passwordInput, '123456');
    expect(button).toBeEnabled();
  });

  it('Ao clicar no botão, o email é salvo no redux e o usuário é redirecionado para a página de carteira', async () => {
    const { user, store } = renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId(EMAIL_INPUT_ID);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_ID);
    const button = screen.getByTestId(BUTTON_ID);

    await user.type(emailInput, VALID_EMAIL);
    await user.type(passwordInput, '123456');
    await user.click(button);

    expect(store.getState().user.email).toBe(VALID_EMAIL);
    expect(window.location.pathname).toBe('/carteira');
  });
});
