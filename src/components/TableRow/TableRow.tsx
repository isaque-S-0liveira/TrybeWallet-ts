import { useDispatch } from 'react-redux';
import ValueFormatter from '../../services/valueFormater';
import { editExpense } from '../../redux/actions';
import { ExpenseType } from '../../types/ActionsTypes';

type TableRowProps = {
  expense: ExpenseType;
  isFirst: boolean;
};

function TableRow({ expense, isFirst }: TableRowProps) {
  const dispatch = useDispatch();
  const rowClass = isFirst ? 'highlighted-row' : '';

  return (
    <tr>
      <td className={ rowClass }>{expense.id}</td>
      <td className={ rowClass }>{expense.description}</td>
      <td className={ rowClass }>{expense.tag}</td>
      <td className={ rowClass }>{expense.method}</td>
      <td className={ rowClass }>{ValueFormatter({ value: Number(expense.value) })}</td>
      <td className={ rowClass }>
        {expense.exchangeRates[expense.currency].name.split('/')[0]}
      </td>
      <td className={ rowClass }>
        {ValueFormatter({ value: Number(expense.exchangeRates[expense.currency].ask) })}
      </td>
      <td className={ rowClass }>
        {ValueFormatter({ value: Number(expense.exchangeRates[expense.currency].ask)
          * Number(expense.value) })}
      </td>
      <td className={ rowClass }>Real</td>
      <td className={ rowClass }>
        <button
          data-testid="edit-expense-table-button"
          type="button"
          aria-label="Edit"
          className="btn btn-warning"
          onClick={ () => dispatch(editExpense({ id: expense.id })) }
        >
          <i className="bi bi-pencil-square" />
        </button>
        <button
          data-testid="delete-expense"
          type="button"
          aria-label="Delete"
          className="btn btn-danger"
        >
          <i className="bi bi-trash-fill" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
