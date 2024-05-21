import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { HondaBrandContext } from '../Make/Honda';

function Civic() {

  const [make, setMake] = useState('Make: Honda');
  const [model, setModel] = useState('Model: Civic')
  const [year, setYear] = useState('Year: 2020')
  const [mileage, setMileage] = useState('Mileage: 55,000');
  const [mpg, setMPG] = useState('MPG: 34 / 446 miles Total Range');

  const hondaBrand = useContext(HondaBrandContext);

  return (
    <>
      <CardGroup>
          <Card>
              <Card.Img className="carImage" variant="top" src="https://asianjournal-ca.s3.us-west-1.amazonaws.com/wp-content/uploads/2015/12/2016-Honda-Civic-low.jpg" />
              <Card.Body>
              <Card.Title>2016 {hondaBrand} Civic LX</Card.Title>
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

export default Civic