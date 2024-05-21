import React, { useContext, createContext, useState } from 'react';
import { UserContext } from '../CarPage';
// import { ChildTruckContext } from '../Type/Truck';
// import CarPage from '../CarPage';
import R1T from '../Model/R1T';
import R1S from '../Model/R1S';
import R2 from '../Model/R2';

export const BrandContext = createContext();

function Rivian() {

    const [ brand, setBrand ] = useState('Rivian')
    const car = useContext(UserContext);
    // const childTruck = useContext(ChildTruckContext);
    // setMake('Rivian R1T');

  return (
    <> 
    <div className="makerDiv">
      <BrandContext.Provider value={brand}>
        <R1T />
        <R1S />
        <R2 />
      </BrandContext.Provider>
    </div>
    


      {/* <div>This is from the {car} component</div> 
      <p>{`Hello ${car} again!`}</p>
      <ul>
        <li>0-60 mph in 3 seconds</li>
        <li>Towing: 11,000 lbs</li>
        <li>Max Ground Clearance: 14.9</li>
        <li>Seats: 5</li>
        <li>Storage Space: 62 cu ft</li>
        <li>Payload: 1,764 lbs</li>
      </ul> */}
      {/* <p>{`Hello ${childTruck} again!`}</p> */}
      {/* <MakeContext.Provider value={car}>
            <h1>{`Hello ${make}!`}</h1>
            <CarPage />
      </MakeContext.Provider> */}

    </>
    
  )
}

export default Rivian
