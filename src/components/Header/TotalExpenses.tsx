import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import coinsIcon from '../../images/Moedas.png';
import { ReduxState } from '../../types/Redux';

type TotalExpensesProps = {
  containerClass?: string;
};

function TotalExpenses({ containerClass = '' }: TotalExpensesProps) {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);

  const totalExpenses = useMemo(() => {
    return expenses.reduce((total, expense) => {
      const { value, currency, exchangeRates } = expense;
      const exchangeRate = parseFloat(exchangeRates[currency].ask);
      return total + parseFloat(value) * exchangeRate;
    }, 0);
  }, [expenses]);

  return (
    <div className={ `icon-text ${containerClass}` } id="total-field-container">
      <img src={ coinsIcon } alt="coins" />
      <div className="ms-1">
        <span className="fw-bold me-1">Total de despesas:</span>
        <span data-testid="total-field">
          {expenses.length === 0 ? '0.00' : totalExpenses.toFixed(2)}
        </span>
        <span className="ms-1" data-testid="header-currency-field">BRL</span>
      </div>
    </div>
  );
}

export default TotalExpenses;
