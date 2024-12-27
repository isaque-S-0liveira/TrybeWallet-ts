import './Pagination.css';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Expense pagination">
      <ul className="pagination pagination-lg">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={ index }
            className={ `page-item ${currentPage === index + 1 ? 'active' : ''}` }
          >
            <button
              className="page-link"
              onClick={ () => handleClick(index + 1) }
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
