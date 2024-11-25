import { useSelector } from 'react-redux';
import logo from '../../images/logo_Trybe_Wallet.png';
import './Header.css';
import { ReduxState } from '../../types/Redux';
import TotalExpenses from './TotalExpenses';
import UserEmail from './UserEmail';

function Header() {
  const { user } = useSelector((state: ReduxState) => state);

  return (
    <header id="header-container">
      <div id="logo-container">
        <img src={ logo } alt="Trybe Wallet logo" id="header-logo-img" />
      </div>
      <div className="d-md-flex justify-content-between d-lg-none">
        <TotalExpenses />
        <UserEmail email={ user.email } />
      </div>

      <TotalExpenses containerClass="d-none d-lg-flex justify-content-between" />
      <UserEmail
        containerClass="d-none d-lg-flex justify-content-between"
        email={ user.email }
      />

    </header>
  );
}

export default Header;
