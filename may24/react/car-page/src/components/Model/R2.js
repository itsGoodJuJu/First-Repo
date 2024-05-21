import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrandContext } from '../Make/Rivian';

function R2() {
    const [make, setMake] = useState('Make: Rivian');
    const [model, setModel] = useState('Model: R2')
    const [year, setYear] = useState('Year: 2026')
    const [mileage, setMileage] = useState('Mileage: 5,000');
    const [mpge, setMPGe] = useState('MPGe: 75 / 330 miles Total Range');

    const brand = useContext(BrandContext);
    
  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://bgr.com/wp-content/uploads/2022/10/rivian-recall-r1s-truck.jpg?quality=82&strip=all" />
                <Card.Body>
                <Card.Title>{brand} R2</Card.Title>
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
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
  )
}

export default R2