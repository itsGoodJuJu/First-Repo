import React, { useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NissanBrandContext } from '../Make/Nissan';

function Altima() {
    const [make, setMake] = useState('Make: Nissan');
    const [model, setModel] = useState('Model: Altima')
    const [year, setYear] = useState('Year: 2024')
    const [mileage, setMileage] = useState('Mileage: 4');
    const [mpg, setMPG] = useState('MPG: 27 City / 39 Highway');

    const nissanBrand = useContext(NissanBrandContext);

  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/86adfc3ea95840c59e279027f5713aac.jpg" />
                <Card.Body>
                    <Card.Title>{nissanBrand} Altima</Card.Title>
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

export default Altima