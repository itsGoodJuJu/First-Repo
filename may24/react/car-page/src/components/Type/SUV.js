import React, { createContext } from 'react'

export const CarType = createContext();
const suv = 'Type: SUV';

function SUV() {
  return (
    <>
      <CarType.Provider value={suv}>
        <p>SUV component</p>
      </CarType.Provider>
    </>

  )
}

export default SUV