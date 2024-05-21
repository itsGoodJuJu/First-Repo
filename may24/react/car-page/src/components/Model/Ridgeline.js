import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { HondaBrandContext } from '../Make/Honda';

function Ridgeline() {

    const [make, setMake] = useState('Make: Honda');
    const [model, setModel] = useState('Model: Ridgeline')
    const [year, setYear] = useState('Year: 2022')
    const [mileage, setMileage] = useState('Mileage: 225,000');
    const [mpg, setMPG] = useState('MPG: 80 / 400 miles Total Range');

    const hondaBrand = useContext(HondaBrandContext);

  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.dealer.com/ddc/vehicles/2022/Honda/Ridgeline/Truck/perspective/front-left/2022_76.png" />
                <Card.Body>
                <Card.Title>{hondaBrand} Ridgeline</Card.Title>
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

export default Ridgeline