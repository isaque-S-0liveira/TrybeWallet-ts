import Header from '../../components/Header/Header';
import WalletForm from '../../components/WalletForm/WalletForm';
import './Wallet.css';

function Wallet() {
  return (
    <main id="main-wallet">
      <div id="main-header">
        <Header />
        <WalletForm />
      </div>
    </main>
  );
}

export default Wallet;
