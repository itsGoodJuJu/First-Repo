import React from "react";
import './App.css';
import Honda from "./components/Make/Honda";
import Nissan from "./components/Make/Nissan";
import Rivian from "./components/Make/Rivian";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/honda">Honda</Link>
            </li>
            <li>
              <Link to="/nissan">Nissan</Link>
            </li>
            <li>
              <Link to="/rivian">Rivian</Link>
            </li>
          </ul>
        </nav>
  
        <Switch>
          <Route path ="/home">
            <Rivian />
            <Nissan />
            <Honda />
          </Route>
          <Route path ="/honda">
            <Honda />
          </Route>
          <Route path ="/nissan">
            <Nissan />
          </Route>
          <Route path ="/rivian">
            <Rivian />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




