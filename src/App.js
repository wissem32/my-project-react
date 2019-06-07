import React, {Component} from 'react';
import logo from './logo.svg';
import  './App.css';
import Post from './Post.js';
import Impression from './Impression.js';
import Partition from './Partition.js';

import {BrowserRouter,NavLink,Route, Link } from "react-router-dom";
// import {NavLink} from "react-router-dom" 
import Admin from "./Admin.js" ;
import Utilisateur from "./Utilisateur.js" ;
import Home from "./Home.js" ;
import Programme from "./Programme.js" ;
import Stockage from "./Stockage.js" ;
import Bouton from './Bouton.js'
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



class App extends Component {
  
  render() { 
     return (
       <div className="App">
 

{/* <a href="Admin"><button>Admin</button></a> */}

       <BrowserRouter> 
           
<div >
<Route path="/Admin" exact component={Admin} />
</div>
 <div >
<Route path="/Utilisateur"  component={Utilisateur} />
 </div> 
      <div >
<Route path="/" exact component={Bouton} />
</div>    

          
        </BrowserRouter>  
</div>  
  

  );
}
}

export default App;
