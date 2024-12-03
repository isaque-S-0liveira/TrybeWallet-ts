import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Forms/Button/Button';
import Input from '../../components/Forms/Input/Input';
import logo from '../../images/logo_Trybe_Wallet.png';
import './Login.css';
import { setUser } from '../../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = form;
    dispatch(setUser(email));
    navigate('/carteira');
  };

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    const { email, password } = form;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= passwordMinLength;
    setButtonDisabled(!(isEmailValid && isPasswordValid));
  }, [form]);

  return (
    <form className="login-form-main" onSubmit={ handleSubmit }>
      <div className="login-form-container container">
        <img src={ logo } alt="logo" />
        <Input
          id="email"
          testId="email-input"
          bootstrapClass="col-8 mb-2"
          onChange={ handleChange }
          type="email"
          name="email"
          value={ form.email }
          placeholder="E-mail"
          required
        />
        <Input
          id="password"
          testId="password-input"
          bootstrapClass="col-8"
          onChange={ handleChange }
          type="password"
          name="password"
          value={ form.password }
          placeholder="Senha"
          required
        />
        <Button
          testId="login-submit-button"
          disabled={ {
            value: buttonDisabled,
            reason: 'E-mail deve ter um formato válido e senha deve ter 6 caracteres' } }
          type="submit"
          bootstrapClass="col-8"
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}

export default Login;
