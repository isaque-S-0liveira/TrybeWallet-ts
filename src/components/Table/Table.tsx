import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import './Table.css';
import { ReduxState } from '../../types/Redux';
import Pagination from '../Pagination/Pagination';
import TableRow from '../TableRow/TableRow';
import TableHeader from '../TableHeader/TableHeader';

function Table() {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  const currentExpenses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return expenses.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, expenses]);

  return (
    <div id="main-table">
      <div id="container-fantasma" />
      <div id="table-container">
        <table>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {currentExpenses.map((expense, index) => (
              <TableRow key={ expense.id } expense={ expense } isFirst={ index === 0 } />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={ totalPages }
        currentPage={ currentPage }
        onPageChange={ setCurrentPage }
      />
    </div>
  );
}

export default Table;
