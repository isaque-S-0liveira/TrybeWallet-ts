import { useSelector } from 'react-redux';
import { ReduxState } from '../../types/Redux';

function UserEmail({
  containerClass = '',
}: {
  containerClass?: string;
}) {
  const email = useSelector((state: ReduxState) => state.user.email);
  return (
    <div id="email-field-container" className={ `ms-1 icon-text ${containerClass}` }>
      <i className="bi bi-person-circle me-2" aria-hidden="true" />
      <span data-testid="email-field">{email}</span>
    </div>
  );
}

export default UserEmail;
