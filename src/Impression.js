import React, {Component} from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import Fcimpression from './Fcimpression.js'

import Flexo from './Flexo.js';
import Helio6 from './Helio6.js';
import Helio7 from './Helio7.js';
import Helio9 from './Helio9.js';


class Impression extends Component {
    render() { 
       return (

        <div>
     <BrowserRouter> 
     <div className="col21">
        <Link to="/Admin/Partition/Impression/Flexo">
        <Fcimpression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwF2v7kwe6KJ-pNZn0Z4QtcDtinqMvRYC0fAbSsj95Hus0H5w" name="fexo"/>
        </Link>
        <Link to="/Admin/Partition/Impression/Helio6">
        <Fcimpression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwF2v7kwe6KJ-pNZn0Z4QtcDtinqMvRYC0fAbSsj95Hus0H5w" name="Helio6"/>
       </Link>
       <Link to="/Admin/Partition/Impression/Helio7">

        <Fcimpression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4oC96cx-TbvEebNdrQ1FITv1JQc_wsNrQh2J0HJvE3ZVINrj" name="helio7"/>
        </Link>

        <Link to="/Admin/Partition/Impression/Helio9">
        <Fcimpression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4oC96cx-TbvEebNdrQ1FITv1JQc_wsNrQh2J0HJvE3ZVINrj" name="helio9"/>
        </Link>  
        </div>
<div className="col23">

                 <div >      

                  {/* <h2>les partition</h2>   */}

                      <Route path="/Admin/Partition/Impression/Flexo" component={Flexo} />
                   </div>

                   <div >
                       <Route path="/Admin/Partition/Impression/Helio6" component={Helio6} />
                 </div>

                 <div >
                       <Route path="/Admin/Partition/Impression/Helio7" component={Helio7} />
                 </div>
                 <div >
                       <Route path="/Admin/Partition/Impression/Helio7" component={Helio9} />
                 </div>
         </div>

        </BrowserRouter>
</div>
  );
}        

       


    
}

export default Impression;