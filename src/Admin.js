import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js';
import Impression from './Impression.js';
import Partition from './Partition.js';

import { BrowserRouter, NavLink, Route, Link } from "react-router-dom";
// import {NavLink} from "react-router-dom" 
import Flexo from "./Flexo.js";
import Helio6 from "./Helio6.js";
import Home from "./Home.js";
import Programme from "./Programme.js";
import Stockage from "./Stockage.js";

const Découpe = () => {
  return (
    <div>
      <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
      <p style={{ fontSize: "30px" }}>name:fawzi</p>

    </div>
  );
}
const ContreCollage = () => {
  return (
    <div>
      <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
      <p style={{ fontSize: "30px" }}>name:fawzi</p>

    </div>
  );
}



class Admin extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <nav class="navbar navbar-inverse navbar-fixed-top">

              <div class="navbar-header">
                <a class="navbar-brand" href="http://www.altea-packaging.com/fr/home">Web site Cogitel</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><NavLink to="/Admin">Home </NavLink> </li>

                <li> <NavLink to="/Admin/Partition">Partition </NavLink> </li>
                <li> <NavLink to="/Admin/Programme">Programme de travail </NavLink> </li>
                <li>  <NavLink to="/Admin/Stockage">Stockage</NavLink></li>
                <li>  <NavLink to="/Admin/Observation">Observation</NavLink> </li>

              </ul>

            </nav>
          </div>

          
          <div >
            <Route path="/Admin/Partition" component={Partition} />
          </div>

          <div >
            <Route path="/Admin" exact component={Home} />
          </div>

          <div >
            <Route path="/Admin/Programme" component={Programme} />
          </div>
          <div >
            <Route path="/Admin/Stockage" component={Stockage} />
          </div>

        </BrowserRouter>
      </div>


    );
  }
}

export default Admin;
