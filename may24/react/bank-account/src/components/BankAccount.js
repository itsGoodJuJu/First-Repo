import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

export default function BankAccount() {
    const [balance, setBalance] = useState(0);
    // const [transactions, setTransactions] = useState([]);

    const handleSubmitTransaction = (newTransaction) => {
        const { amount, type } = newTransaction;

        if (type === 'withdrawal') {
            setBalance(balance - amount);
            console.log(balance - amount);
        } else if (type === 'deposit') {
            setBalance(balance + amount);
            console.log(balance + amount);
        }

        // setTransactions([...TransactionList, newTransaction]);
    }

  return (
    <> 
        <h1>React Bank Account (RBA) </h1>
        <h2>Account Balance: {balance}</h2>
        <TransactionForm submitTransaction={handleSubmitTransaction}/>
    </>
  )
}
