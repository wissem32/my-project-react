import React, {Component} from 'react';
import logo from './logo.svg';
import  './App.css';
import Post from './Post.js';
import Impression from './Impression.js';
import Partition1 from './Partition1.js';

import {BrowserRouter,NavLink,Route, Link } from "react-router-dom";
// import {NavLink} from "react-router-dom" 
import Flexo from "./Flexo.js" ;
import Helio6 from "./Helio6.js" ;
import Home from "./Home.js" ;
import Programme from "./Programme.js" ;
import Stockage from "./Stockage.js" ;

const Découpe=()=> {
  return (
    <div>
  <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
  <p style={{fontSize:"30px"}}>name:fawzi</p>

</div>
  );
}
const ContreCollage=()=> {
  return (
    <div>
  <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
  <p style={{fontSize:"30px"}}>name:fawzi</p>

</div>
  );
}



class Utilisateur extends Component {
  
  render() { 
     return (
       <div className="App">
 
                <BrowserRouter> 

     
                <nav class="navbar navbar-inverse navbar-fixed-top">
  
  <div class="navbar-header">
    <a class="navbar-brand" href="www.cogitel.com">Web site Cogitel</a>
  </div>
  <ul class="nav navbar-nav">
      <li class="active"><NavLink to="/">Home </NavLink> </li> 

      <li> <NavLink to="/Partition1">Partition </NavLink> </li> 
      <li> <NavLink to="/Programme">Programme de travail </NavLink> </li> 
      <li>  <NavLink to="/Stockage">Stockage</NavLink></li> 
      <li>  <NavLink to="/Observation">Observation</NavLink> </li> 
      
  </ul>

</nav>
<div >
<Route path="/Partition1"  component={Partition1} />
</div>

<div >
<Route path="/home" exact component={Home} />
</div>
      
<div >
<Route path="/Programme"  component={Programme} />
</div>
<div >
<Route path="/Stockage"  component={Stockage} />
</div>
     
       
       </BrowserRouter> 
</div>  
  

  );
}
}

export default Utilisateur;
