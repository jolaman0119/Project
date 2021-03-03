import logo from './logo.svg';
import React from 'react';
import NaviBar from "./Components/Navibar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Snacks } from "./Page/Snacks/Snacks";
import { Salads } from "./Page/Salads/Salads";
import { Soups } from "./Page/Soups/Soups";
import { Steaks } from "./Page/Steaks/Steaks";
import { Kebabs } from "./Page/Kebabs/Kebabs";
import { Desserts } from "./Page/Desserts/Desserts";
import { Bar } from "./Page/Bar/Bar";
import { Information } from "./Page/Information/Information";

function App() {
  return (
      <>
          <Router>
            <NaviBar />
            <Switch>
                <Route exact path="/" />
                <Route path="/snacks" component={ Snacks } />
                <Route path="/salads" component={ Salads } />
                <Route path="/soups" component={  Soups } />
                <Route path="/steaks" component={  Steaks } />
                <Route path="/kebabs" component={  Kebabs } />
                <Route path="/desserts" component={  Desserts } />
                <Route path="/bar" component={  Bar } />
                <Route path="/information" component={  Information } />
            </Switch>
          </Router>
      </>
  )
  ;
}

export default App;
