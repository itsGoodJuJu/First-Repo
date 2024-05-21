import React, {useState} from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
        {value}
        </button>
    );
}

export default function Keypad() {
    const [numberValue ,setNumberValue] = useState('');
    // const [operator, setOperator] = useState('');

    function handleClick(i) {
        setNumberValue(numberValue + i);

        // if (setNumberValue === 0 ) {

        // }
    }

    function clearDisplay() {
        setNumberValue('')
    }

  return (
    <>
    <div className='Calculator'>
        <div className= 'numberDisplay'>{numberValue}</div>
      <div className="functions1">
        <Square value={["C"]} onSquareClick={() => clearDisplay('')}/>
        <Square value={["+/-"]} />
        <Square value={["%"]} />
        <Square value={["÷"]} />
      </div>
      <div className="sevenTimes">
        <Square value={["7"]} onSquareClick={() => handleClick(7)}/>
        <Square value={["8"]} onSquareClick={() => handleClick(8)}/>
        <Square value={["9"]} onSquareClick={() => handleClick(9)}/>
        <Square value={["X"]} />
      </div>
      <div className="fourMinus">
        <Square value={["4"]} onSquareClick={() => handleClick(4)}/>
        <Square value={["5"]} onSquareClick={() => handleClick(5)}/>
        <Square value={["6"]} onSquareClick={() => handleClick(6)}/>
        <Square value={["-"]} />
      </div>
      <div className="onePlus">
        <Square value={["1"]} onSquareClick={() => handleClick(1)}/>
        <Square value={["2"]} onSquareClick={() => handleClick(2)}/>
        <Square value={["3"]} onSquareClick={() => handleClick(3)}/>
        <Square value={["+"]} />
      </div>
      <div className="zeroEquals">
        <Square value={["0"]} onSquareClick={() => handleClick(0)}/>
        <Square value={["."]} />
        <Square value={["="]} />
      </div>
    </div>
    </>
  )
}
