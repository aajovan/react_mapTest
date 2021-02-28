import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.scss';
import Navigacija from "./Navigacija";
import Footer from "./Footer";
import Prva from "./Prva";
import Druga from "./Druga";
import IndexDEMO from "./IndexDEMO";
import NoMatch from "./NoMatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import podaci from "./sample.json";

class App extends Component {

  render() {
    return (
      <div>
        {podaci ?
          <div className="">
            <Router>
              <Navigacija
                logo={{ path: "/", src: podaci.logoSrc }}
                left={[
                  { title: podaci.stranice[0].naziv, path: "/prva" },
                  { title: podaci.stranice[1].naziv, path: "/druga" }
                ]}
              />
                <div className="">
                  <Switch>
                    <Route exact path="/">
                      <IndexDEMO />
                    </Route>
                    <Route exact path="/prva">

                      <Prva data={podaci.stranice[0]} />
                    </Route>
                    <Route exact path="/druga">
                      <Druga data={podaci.stranice[1]} />
                    </Route>
                    <Route path="*">
                      <NoMatch />
                    </Route>
                  </Switch>
                </div>
            </Router>
            <Footer text="2021." />
          </div>
          : <div>Učitavanje</div>
        }
      </div>
    );
  }
}


export default App;
