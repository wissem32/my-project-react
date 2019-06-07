import React, {Component} from 'react';

import './App.css';
import {BrowserRouter,NavLink,Route, Link } from "react-router-dom";
import Pflexo from "./Pflexo.js" ;
import Phelio6 from "./Phelio6.js" ;
import Phelio7 from "./Phelio7.js" ;
import Phelio9 from "./Phelio9.js" ;




    
class Programme extends Component {
    
    
    render() { 
      
     
       return (
<div>
<BrowserRouter>
<div >
     
        <ul class="breadcrumb">
          <li> <NavLink to="/Admin/Programme/Pflexo">Programme de Flexo</NavLink></li>
          <li><NavLink to="/Admin/Programme/Phelio6">Programme de Helio6</NavLink></li>
          <li><NavLink to="/Admin/Programme/Phelio7">Programme de Helio7</NavLink></li>
          <li class="active"><NavLink to="/Admin/Programme/Phelio9">Programme de Helio 9</NavLink></li>        
       </ul>
 </div>

  



<Route path="/Admin/Programme/Pflexo" component={Pflexo} />
<Route path="/Admin/Programme/Phelio6" component={Phelio6} />
<Route path="/Admin/Programme/Phelio7" component={Phelio7} />
<Route path="/Admin/Programme/Phelio9" component={Phelio9} />

</BrowserRouter>
 
</div>
  );
}        
    
}

export default Programme;