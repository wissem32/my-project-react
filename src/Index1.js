import React, {Component} from 'react';
import logo from './logo.svg';
import  './App.css';
// import Post from './Post.js';
import Home from './Home.js';
import Utilisateur from './Utilisateur.js';

import {BrowserRouter,NavLink,Route, Link } from "react-router-dom";
// import {NavLink} from "react-router-dom" 
// import Flexo from "./Flexo.js" ;
// import Helio6 from "./Helio6.js" ;
// import Home from "./Home.js" ;
// import Programme from "./Programme.js" ;
// import Stockage from "./Stockage.js" ;

// const Découpe=()=> {
//   return (
//     <div>
//   <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
//   <p style={{fontSize:"30px"}}>name:fawzi</p>

// </div>
//   );
// }
// const ContreCollage=()=> {
//   return (
//     <div>
//   <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
//   <p style={{fontSize:"30px"}}>name:fawzi</p>

// </div>
//   );
// }



class Index1 extends Component {
  
  render() { 
     return (
       <div className="App">
 
 <BrowserRouter>
       <div style={{marginTop:"40px"}}>
       <NavLink to="/Admin"><button>Admin</button></NavLink> 
           <NavLink to="/Utilisateur"><button>>Utilisateur</button></NavLink>
      <p>hdghddgd</p>
       </div>
       <div >
<Route path="/home"  component={Home} />
</div>

<div >
<Route path="/Utilisateur" exact component={Utilisateur} />
</div>
<div >
<Route path="/" exact component={Index1} />
</div>
       </BrowserRouter> 
</div>  
  

  );
}
}

export default Index1;
