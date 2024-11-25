import coinsIcon from '../../images/Moedas.png';

function TotalExpenses({ containerClass = '' }) {
  return (
    <div className={ `icon-text ${containerClass}` } id="total-field-container">
      <img src={ coinsIcon } alt="coins" />
      <div className="ms-1">
        <span className="fw-bold me-1">Total de despesas:</span>
        <span data-testid="total-field">{0}</span>
        <span className="ms-1" data-testid="header-currency-field">BRL</span>
      </div>
    </div>
  );
}

export default TotalExpenses;
