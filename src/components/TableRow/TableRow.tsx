type TableRowProps = {
  expense: any;
  isFirst: boolean;
};

function TableRow({ expense, isFirst }: TableRowProps) {
  const rowClass = isFirst ? 'highlighted-row' : '';

  return (
    <tr>
      <td className={ rowClass }>{expense.id}</td>
      <td className={ rowClass }>{expense.description}</td>
      <td className={ rowClass }>{expense.tag}</td>
      <td className={ rowClass }>{expense.method}</td>
      <td className={ rowClass }>{expense.value}</td>
      <td className={ rowClass }>
        {expense.exchangeRates[expense.currency].name.split('/')[0]}
      </td>
      <td className={ rowClass }>
        {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
      </td>
      <td className={ rowClass }>
        {(
          Number(expense.exchangeRates[expense.currency].ask)
          * Number(expense.value)
        ).toFixed(2)}
      </td>
      <td className={ rowClass }>Real</td>
      <td className={ rowClass }>
        <button type="button" aria-label="Edit" className="btn btn-warning">
          <i className="bi bi-pencil-square" />
        </button>
        <button type="button" aria-label="Delete" className="btn btn-danger">
          <i className="bi bi-trash-fill" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
