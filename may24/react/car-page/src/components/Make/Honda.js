import React, { useState, createContext, useContext } from 'react';
import Accord from '../Model/Accord';
import Civic from '../Model/Civic';
import CRV from '../Model/CRV';
import Ridgeline from '../Model/Ridgeline';

export const HondaBrandContext = createContext();

function Honda() {

  const [hondaBrand, setHondaBrand] = useState("Honda")

  return (
    <>
    <div className="makerDiv">
      <HondaBrandContext.Provider value={hondaBrand}>
        <Accord />
        <Civic />
        <CRV />
        <Ridgeline />
      </HondaBrandContext.Provider>
    </div>
    </>
    
  )
}

export default Honda