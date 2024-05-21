import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrandContext } from '../Make/Rivian';

function R1S() {

    const [make, setMake] = useState('Make: Rivian');
    const [model, setModel] = useState('Model: R1S')
    const [year, setYear] = useState('Year: 2023')
    const [mileage, setMileage] = useState('Mileage: 15,000');
    const [mpge, setMPGe] = useState('MPGe: 73 / 321 miles Total Range');

    const brand = useContext(BrandContext);

  return (
    <>
        <CardGroup>
            <Card>
                <Card.Img className="carImage" variant="top" src="https://images.rivian.com/2md5qhoeajym/4SuqmqtG3lODRp60Kdjt5y/a8deb67320a65cecf3272369d2448f84/r1s_limestone_3_4_front.webp?fm=webP" />
                <Card.Body>
                <Card.Title>{brand} R1S</Card.Title>
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

export default R1S