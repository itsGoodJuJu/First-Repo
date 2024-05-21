import React, { createContext, useContext, useState } from 'react';
import Altima from '../Model/Altima';
import Rogue from '../Model/Rogue';
import Frontier from '../Model/Frontier';


export const NissanBrandContext = createContext();

function Nissan() {

  const [nissanBrand,setnissanBrand] = useState("Nissan")
  
  return (
    <>
      <div className="makerDiv">
        <NissanBrandContext.Provider value={nissanBrand}>
          <Altima />
          <Rogue />
          <Frontier />
        </NissanBrandContext.Provider>
      </div>
    </>
    
  )
}

export default Nissan