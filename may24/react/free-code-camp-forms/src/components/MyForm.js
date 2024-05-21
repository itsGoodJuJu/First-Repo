import React, { useState } from 'react';

export default function MyForm() {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    function handleInputChange(e) {
        const value = e.target.value;
        setInputValue(value);

        if (value.length < 3) {
            setInputError('Input must be at least 3 characters');
        } else {
            setInputError(null);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.length >= 3) {
            // submit form
        } else {
            setInputError('Input must be at least 3 characters');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Fruit:
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
        <button type="submit">Submit</button>
    </form>
  );
}
