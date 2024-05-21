import React, { createContext, useState, useContext } from 'react';
import { TruckContext } from '../CarPage';
import Rivian from '../Make/Rivian';

// export const ChildTruckContext = createContext();

export default function Truck() {

  const truck = useContext(TruckContext);
  // const [ childTruck, setChildTruck ] = useState('Child');


  return (
    <>
      <div>This is from the {truck} component</div> 
      {/* <div>Truck</div> */}
      {/* <div>
          <ChildTruckContext.Provider value={childTruck}>
              {`I'm a ${childTruck}`}
              <Rivian />
          </ChildTruckContext.Provider>
      </div> */}
    </>
    
  )
}

