import React, {Component} from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import Fcdecoupe from './Fcdecoupe.js'

import Flexo from './Flexo.js';
import Helio6 from './Helio6.js';
import Helio7 from './Helio7.js';
import Helio9 from './Helio9.js';
import Decoupe1 from './Decoupe1.js';
import Decoupe2 from './Decoupe2';
import Decoupe3 from './Decoupe3.js';


class Decoupe extends Component {
    render() { 
       return (

        <div>
     <BrowserRouter> 
     <div className="col21">
        <Link to="/Admin/Partition/Decoupe/Decoupe1">
        <Fcdecoupe logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccjkcYlJuj3A9nTSBkwVHGYj1qffvx3h2zrTF1yqQfjwgG3pmBA" name="Machine1"/>
        </Link>
        <Link to="/Admin/Partition/Decoupe/Decoupe2">
        <Fcdecoupe logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccjkcYlJuj3A9nTSBkwVHGYj1qffvx3h2zrTF1yqQfjwgG3pmBA" name="Machine2"/>
       </Link>
       <Link to="/Admin/Partition/Decoupe/Decoupe3">

        <Fcdecoupe logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccjkcYlJuj3A9nTSBkwVHGYj1qffvx3h2zrTF1yqQfjwgG3pmBA" name="Machine3"/>
        </Link>

        <Link to="/Admin/Partition/Decoupe/Decoupe4">
        <Fcdecoupe logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccjkcYlJuj3A9nTSBkwVHGYj1qffvx3h2zrTF1yqQfjwgG3pmBA" name="Machine4"/>
        </Link>  
        </div>
<div className="col23">

                 <div >      

                  {/* <h2>les partition</h2>   */}

                      <Route path="/Admin/Partition/Decoupe/Decoupe1" component={Decoupe1} />
                   </div>

                   <div >
                       <Route path="/Admin/Partition/Decoupe/Decoupe2" component={Decoupe2} />
                 </div>

                 <div >
                       <Route path="/Admin/Partition/Decoupes/Decoupe3" component={Decoupe3} />
                 
                 </div>
         </div>

        </BrowserRouter>
</div>
  );
}        

       


    
}

export default Decoupe;