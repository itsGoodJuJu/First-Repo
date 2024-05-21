import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrandContext } from '../Make/Rivian';

function R1T() {

    const [make, setMake] = useState('Make: Rivian');
    const [model, setModel] = useState('Model: R1T')
    const [year, setYear] = useState('Year: 2023')
    const [mileage, setMileage] = useState('Mileage: 25,000');
    const [mpge, setMPGe] = useState('MPGe: 76');

    const brand = useContext(BrandContext);
  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.rivian.com/2md5qhoeajym/xUWQfKCAHpyYSedy0u20Q/2938522e203ca3cb7f076e88084f5d31/r1t_limestone_3_4_front.webp?fm=webP" />
                <Card.Body>
                <Card.Title>{brand} R1T</Card.Title>
                <Card.Text>
                    <div>
                       {make}
                    </div>
                    <div>
                        {model}
                    </div>
                    <div>
                        {year}
                    </div>
                    <div>
                        {mileage}
                    </div>
                    <div>
                        {mpge}
                    </div>
                    <br/>
                    
                    {/* <div>
                        <UserContext.Provider value={car}>
                            {`I'm a ${car}`}
                            <Rivian />
                        </UserContext.Provider>
                    </div>
                    <div>
                        <TruckContext.Provider value={truck}>
                            {`I'm a ${truck}`}
                            <Truck />
                        </TruckContext.Provider>
                    </div> */}
                    
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
    
        
  )
}

export default R1T