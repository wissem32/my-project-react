import React, {Component} from 'react';

import Impression from './Impression.js';
import {BrowserRouter,NavLink,Route, Link } from "react-router-dom";
import Decoupe from './Decoupe.js';

import Flexo from "./Flexo.js" ;
import Helio6 from "./Helio6.js" ;
import Helio7 from "./Helio7.js" ;
import Helio9 from "./Helio9.js" ;


// const fcimpression=()=> {
//     return (
//       <div>
//          <Link to="/Impression/Flexo">
//         <Impression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwF2v7kwe6KJ-pNZn0Z4QtcDtinqMvRYC0fAbSsj95Hus0H5w" name="fexo"/>
//         </Link>
//         <Link to="/Impression/Helio6">
//         <Impression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwF2v7kwe6KJ-pNZn0Z4QtcDtinqMvRYC0fAbSsj95Hus0H5w" name="Helio6"/>
//        </Link>
//        <Link to="/Impression/Helio7">

//         <Impression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4oC96cx-TbvEebNdrQ1FITv1JQc_wsNrQh2J0HJvE3ZVINrj" name="helio7"/>
//         </Link>
//         <Link to="/Impression/Helio9">

//         <Impression logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4oC96cx-TbvEebNdrQ1FITv1JQc_wsNrQh2J0HJvE3ZVINrj" name="helio9"/>
//         </Link>

//   </div>
    
class Partition extends Component {
    render() { 
       return (

        <div>
      <BrowserRouter>

      <div class="row">
           <div class="col-md-3">

           <div className="col1">
           <h3>les section</h3>
 
                  <ul>
                      <li style={{marginTop:"20px"}} > <NavLink to="/Admin/Partition/Impression"><h4 className="section">Impression</h4> </NavLink> </li> 
                      <li style={{marginTop:"20px"}}>  <NavLink to="/Admin/Partition/Decoupe"><h4 className="section">Découpe</h4></NavLink></li> 
                      <li style={{marginTop:"20px"}}>  <NavLink to="/Admin/Partition/Collage"><h4 className="section">ContreCollage</h4></NavLink> </li> 
                
                </ul>
               <img className="imgcojitel" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3TVSLiKCjpxh8p8MWtzJJQkjS99JoiMy663xF4ZvU4S_KLpCDA"/>
               
                </div> 

           </div> 


           <div class="col-md-7" >  
            <div className="col2">
                 
                <Route path="/Admin/Partition/Impression"  component={Impression} />
                 <Route path="/Admin/Partition/Decoupe/" component={Decoupe} />
                {/* <Route path="/Admin/Partition/Collage/" component={Collage} />   */}
              </div> 

           </div> 
   
         

       </div>
       </BrowserRouter>
       
</div>
  );
}        

       


    
}

export default Partition;