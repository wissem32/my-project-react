import React, {Component} from 'react';

import './App.css';

import Inciflex from './Inciflex.js';
import Newsel from './Newsel.js';

  import {BrowserRouter, NavLink, Route}  from 'react-router-dom'
 


class Stockage extends Component {
   
  
    render() { 
        
       return (

<div>
<BrowserRouter> 

    <center>
 <div className="stockage">
   <NavLink to= "/Admin/Stockage/Newsel">  <button type="button" class="btn btn-success">Newsel</button>
</NavLink>
   <NavLink to= "/Admin/Stockage/Inciflex"><button type="button" class="btn btn-warning">Inciflex</button>
</NavLink>
   </div> 
    </center>
    <div >
<Route path="/Admin/Stockage/Newsel" exact component={Newsel} />
</div>
<div >
<Route path="/Admin/Stockage/Inciflex" exact component={Inciflex} />
</div>
    </BrowserRouter> 

 </div>       
  );
}        
    
}

export default Stockage;