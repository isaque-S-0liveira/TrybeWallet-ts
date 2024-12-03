import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
import CurrenciesType from '../../types/CurrenciesType';
import Button from '../Forms/Button/Button';
import './WalletForm.css';
import { addExpense } from '../../redux/actions';
import { Dispatch, ReduxState } from '../../types/Redux';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const walletExpenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const IntialForm = {
    id: 0,
    value: '0',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currency: 'USD',
    exchangeRates: {},
  };
  const [form, setForm] = useState({ ...IntialForm });
  const [currencies, setCurrencies] = useState<CurrenciesType>();
  const [disabled, setDisabled] = useState({
    value: false, reason: 'Todos os campos devem ser preenchidos',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lastExpense = walletExpenses[walletExpenses.length - 1];
    if (!lastExpense) {
      dispatch(addExpense({ ...form, id: 0 }));
    } else {
      dispatch(addExpense({ ...form, id: lastExpense.id + 1 }));
    }
    setForm({ ...IntialForm });
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currenciesKey = Object.keys(data);
      setCurrencies(currenciesKey.filter((c: string) => c !== 'USDT'));
    };
    fetchCurrency();
  }, []);

  useEffect(() => {
    const { value, description, method, tag, currency } = form;

    const isFilled = value && description && method && tag && currency;
    setDisabled({ ...disabled, value: !isFilled });
  }, [form]);

  return (
    <form id="main-form" onSubmit={ handleSubmit }>
      <div id="wallet-form">
        <div className=" container-lg">
          <div className="row">
            <Input
              id="description"
              bootstrapClass="col-12 col-sm-7"
              testId="description-input"
              label="Descrição de despesas"
              name="description"
              type="text"
              onChange={ handleChange }
              value={ form.description }
              required
            />
            <Select
              label="Categoria de despesas"
              bootstrapClass="col-12 col-sm-5"
              testId="tag-input"
              name="tag"
              value={ form.tag }
              onChange={ handleChange }
              options={ [
                { value: 'Alimentação' },
                { value: 'Lazer' },
                { value: 'Trabalho' },
                { value: 'Transporte' },
                { value: 'Saúde' },
              ] }
            />

            <Input
              id="value"
              bootstrapClass="col-12 col-sm-3"
              testId="value-input"
              label="Valor"
              name="value"
              type="number"
              onChange={ handleChange }
              value={ form.value }
              required
            />

            <Select
              id="method"
              label="Método de pagamento"
              bootstrapClass="col-12 col-sm-6"
              testId="method-input"
              name="method"
              value={ form.method }
              onChange={ handleChange }
              defaultValue={ form.method }
              options={ [
                { value: 'Dinheiro' },
                { value: 'Cartão de crédito' },
                { value: 'Cartão de débito' },
              ] }
            />

            <Select
              label="Moeda"
              bootstrapClass="col-12 col-sm-3"
              testId="currency-input"
              name="currency"
              value={ form.currency }
              onChange={ handleChange }
              defaultValue={ form.currency }
              options={ currencies?.map((currency) => ({ value: currency })) || [] }
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          testId="add-expense-button"
          bootstrapClass="col-6 col-sm-3"
          type="submit"
          disabled={ { value: disabled.value, reason: disabled.reason } }
        >
          {' '}
          Adicionar despesa
        </Button>
      </div>

    </form>
  );
}

export default WalletForm;
