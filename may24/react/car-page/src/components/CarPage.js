import React, {useState, createContext, useContext} from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Rivian from './Make/Rivian';
import Honda from './Make/Honda';
import Truck from './Type/Truck';
import Nissan from './Make/Nissan';


export const UserContext = createContext();
export const TruckContext = createContext();
// export const HondaContext = createContext();

export default function CarPage() {
    
const [ car, setCar ] = useState('Rivian');
const [ truck, setTruck ] = useState('Truck');
const honda = 'vroom vroom';


  return (
    <>
        {/* <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router> */}



        <div className="mainPageDiv">
            {/* Marcus's cars Do Not Touch */}
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://pictures.topspeed.com/IMG/crop/201606/honda-accord-sport-s-2_1600x0w.jpg" />
                    <Card.Body>
                    <Card.Title>2015 Honda Accord Sport</Card.Title>
                    <Card.Text>
                    <div>
                            Make: Honda
                        </div>
                        <div>
                            Model: Accord
                        </div>
                        <div>
                            Year: 2015
                        </div>
                        <div>
                            Mileage: 115,897 mi
                        </div>
                        <div>
                            MPG: 25-35
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://asianjournal-ca.s3.us-west-1.amazonaws.com/wp-content/uploads/2015/12/2016-Honda-Civic-low.jpg" />
                    <Card.Body>
                    <Card.Title>2016 Honda Civic LX</Card.Title>
                    <Card.Text>
                    <div>
                            Make: Honda
                        </div>
                        <div>
                            Model: Civic
                        </div>
                        <div>
                            Year: 2016
                        </div>
                        <div>
                            Mileage: 58000 mi
                        </div>
                        <div>
                            MPG: 31-41
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* Jessie */}
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.dealer.com/ddc/vehicles/2022/Honda/CR-V/SUV/perspective/front-left/2022_76.png" />
                    <Card.Body>
                    <Card.Title>CR-V</Card.Title>
                    <Card.Text>
                    <div>
                            Make: Honda
                        </div>
                        <div>
                            Model: CR-V
                        </div>
                        <div>
                            Year: 2022
                        </div>
                        <div>
                            Mileage: 150,000 miles
                        </div>
                        <div>
                            MPG: 60 MPGe / 230 miles Total Range
                        </div>
                        <div>
                            <UserContext.Provider value={honda}>
                                {`I'm a honda. I go ${honda}!`}
                                <Honda />
                            </UserContext.Provider>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.dealer.com/ddc/vehicles/2022/Honda/Ridgeline/Truck/perspective/front-left/2022_76.png" />
                    <Card.Body>
                    <Card.Title>Ridgeline</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Honda
                        </div>
                        <div>
                            Model: Ridgeline
                        </div>
                        <div>
                            Year: 2022
                        </div>
                        <div>
                            Mileage: 225,000 miles
                        </div>
                        <div>
                            MPG: 80 MPGe / 400 miles Total Range
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            


            

            {/* Justin */}

            {/* <UserContext.Provider value={car}>
                <h1>{`Hello ${car}!`}</h1>
                <Rivian />
            </UserContext.Provider> */}

            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.rivian.com/2md5qhoeajym/xUWQfKCAHpyYSedy0u20Q/2938522e203ca3cb7f076e88084f5d31/r1t_limestone_3_4_front.webp?fm=webP" />
                    <Card.Body>
                    <Card.Title>Rivian R1T</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Rivian
                        </div>
                        <div>
                            Model: R1T
                        </div>
                        <div>
                            Year: 2023
                        </div>
                        <div>
                            Mileage: 25,000 miles
                        </div>
                        <div>
                            76 MPGe / 341 miles Total Range
                        </div>
                        <br/>
                        <div>
                            <UserContext.Provider value={car}>
                                {/* {`I'm a ${car}`} */}
                                <Rivian />
                            </UserContext.Provider>
                        </div>
                        <div>
                            <TruckContext.Provider value={truck}>
                                {`I'm a ${truck}`}
                                <Truck />
                            </TruckContext.Provider>
                        </div>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.rivian.com/2md5qhoeajym/4SuqmqtG3lODRp60Kdjt5y/a8deb67320a65cecf3272369d2448f84/r1s_limestone_3_4_front.webp?fm=webP" />
                    <Card.Body>
                    <Card.Title>Rivian R1S</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Rivian
                        </div>
                        <div>
                            Model: R1S
                        </div>
                        <div>
                            Year: 2023
                        </div>
                        <div>
                            Mileage: 15,000 miles
                        </div>
                        <div>
                            73 MPGe / 321 miles Total Range
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://bgr.com/wp-content/uploads/2022/10/rivian-recall-r1s-truck.jpg?quality=82&strip=all" />
                    <Card.Body>
                    <Card.Title>Rivian R2</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Rivian
                        </div>
                        <div>
                            Model: R2
                        </div>
                        <div>
                            Year: 2026
                        </div>
                        <div>
                            Mileage: 5,000 miles
                        </div>
                        <div>
                            75 MPGe / 330 miles Total Range
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            
                      {/* Beginning of NISSAN CARDS */}
            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/86adfc3ea95840c59e279027f5713aac.jpg" />
                    <Card.Body>
                        <Card.Title>Nissan</Card.Title>
                        <Card.Text>
                            <div>
                                Make: Nissan 
                            </div>
                            <div>
                                Model: Altima SV
                            </div>
                            <div>
                                Year: 2024
                            </div>
                            <div>
                                Mileage: 4
                            </div>
                            <div>
                                MPG: 27 City / 39 Highway
                                <br/>
                                <UserContext.Provider value={car}>
                                    <Nissan />
                                </UserContext.Provider>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>


            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/3b26e8a4b8474a8287b09e7baee057ad.jpg" />
                    <Card.Body>
                    <Card.Title>Nissan</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Nissan
                        </div>
                        <div>
                            Model: Frontier PRO-4X
                        </div>
                        <div>
                            Year: 2024
                        </div>
                        <div>
                            Mileage: 4 miles
                        </div>
                        <div>
                            MPG: 18 City / 22 Highway
                        </div>
                    </Card.Text>
                    </Card.Body>
            </Card>
            </CardGroup>

            <CardGroup>
                <Card>
                    <Card.Img className="carImage" variant="top" src="https://images.autotrader.com/scaler/500/375/hn/c/c42ce7b345494579b45dbbe079dc6f86.jpg" />
                    <Card.Body>
                    <Card.Title>Nissan</Card.Title>
                    <Card.Text>
                        <div>
                            Make: Nissan
                        </div>
                        <div>
                            Model: Rogue SL
                        </div>
                        <div>
                            Year: 2024
                        </div>
                        <div>
                            Mileage: 8 miles
                        </div>
                        <div>
                            MPG: 29 City / 36 Highway
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </>

  )

}

