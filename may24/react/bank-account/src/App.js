// import logo from './logo.svg';
import './App.css';
import BankAccount from './components/BankAccount';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';


function App() {
  return (
    <center>
      <BankAccount/>
      {/* <TransactionForm/> */}
      <TransactionList/>
    </center>
  );
}

export default App;
