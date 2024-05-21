import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NissanBrandContext } from '../Make/Nissan';

function Frontier() {

    const [make, setMake] = useState('Make: Nissan');
    const [model, setModel] = useState('Model: Frontier')
    const [year, setYear] = useState('Year: 2024')
    const [mileage, setMileage] = useState('Mileage: 4');
    const [mpg, setMPG] = useState('MPG: 18 City / 22 Highway');

    const nissanBrand = useContext(NissanBrandContext);

  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/3b26e8a4b8474a8287b09e7baee057ad.jpg" />
                <Card.Body>
                <Card.Title>{nissanBrand} Frontier</Card.Title>
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

export default Frontier