import React, { useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NissanBrandContext } from '../Make/Nissan';

function Rogue() {
    const [make, setMake] = useState('Make: Nissan');
    const [model, setModel] = useState('Model: Rogue')
    const [year, setYear] = useState('Year: 2024')
    const [mileage, setMileage] = useState('Mileage: 8');
    const [mpg, setMPG] = useState('MPG: 29 City / 36 Highway');

    const nissanBrand = useContext(NissanBrandContext);

  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/c42ce7b345494579b45dbbe079dc6f86.jpg"  />
                <Card.Body>
                    <Card.Title>{nissanBrand} Rogue</Card.Title>
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
                            {mpg}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
  )
}

export default Rogue