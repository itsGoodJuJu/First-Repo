import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { HondaBrandContext } from '../Make/Honda';

function Accord() {

  const [make,setMake] = useState('Make: Honda');
  const [model, setModel] = useState('Model: Accord');
  const [year, setYear] = useState('Year: 2015');
  const [mileage, setMileage] = useState('Mileage: 115,897 mi')
  const [mpg, setMPG] = useState('MPG: 25-35');
  

  return (
<>
<CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://pictures.topspeed.com/IMG/crop/201606/honda-accord-sport-s-2_1600x0w.jpg" />
                    <Card.Body>
                    <Card.Title> 2015 Honda Accord Sport</Card.Title>
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

export default Accord