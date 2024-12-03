import logo from '../../images/logo_Trybe_Wallet.png';
import './Header.css';
import TotalExpenses from './TotalExpenses';
import UserEmail from './UserEmail';

function Header() {
  return (
    <header id="header-container" className="container-lg">
      <div id="logo-container">
        <img src={ logo } alt="Trybe Wallet logo" id="header-logo-img" />
      </div>
      <div className="d-sm-flex justify-content-between d-lg-none">
        <TotalExpenses />
        <UserEmail />
      </div>

      <TotalExpenses containerClass="d-none d-lg-flex justify-content-between" />
      <UserEmail
        containerClass="d-none d-lg-flex justify-content-between"
      />

    </header>
  );
}

export default Header;
