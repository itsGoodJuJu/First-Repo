import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const TransactionForm = ({submitTransaction}) => {
    const [amount, setAmount] = useState('');

    const [type, setType] = useState("withdrawal");
    
    // const [submittedData, setSubmittedData] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDropdownChange = (e) => {
        e.preventDefault();
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         if (amount !== '') {
            const transactionAmount = parseFloat(amount);
            const newTransaction = {
                amount: transactionAmount,
                type,
            };

            submitTransaction(newTransaction);
            setAmount('');
            setType('withdrawal')
        }
        // setSubmittedData({amount, type});
        // setAmount({
        //     amount: ''
        // });
        // setType(e.target.value);
        // console.log({amount, type});
    };

  return (
    <>
        <form onSubmit = {handleSubmit}>
            <label>
                Amount:
                <input type="number" placeholder="$0.00" name="amount" value={amount} onChange={handleAmountChange} />
            </label>
            <label>
            Type:
            <select value={type} onChange={handleDropdownChange}>
                <option value="withdrawal">Withdrawal</option>
                <option value="deposit">Deposit</option>
            </select>
            </label>
            
            <Button type="submit" variant="secondary">Submit</Button>
        </form>
    </>
  )
}

export default TransactionForm;