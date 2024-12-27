import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import WalletForm from '../../components/WalletForm/WalletForm';
import './Wallet.css';

function Wallet() {
  return (
    <main id="main-wallet">
      <div id="main-header">
        <Header />
        <WalletForm />
      </div>
      <Table />
    </main>
  );
}

export default Wallet;
