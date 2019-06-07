import React, {Component} from 'react';

import './App.css';


    
 


class Newsel extends Component {
   
  
    render() { 
        
       return (

<div>
    
<center><h3 className="titre">Stockage des clichés Newsel </h3></center>
<div class="row">
   <div class="col-sm-3">
    {/* <div className="imgstock"> */}
        <img className="imgstock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sk7uftSj63m52XtVS2AWSPYK8tqDGzTWv5HJpQtPws4YT64K" />
   </div>
    <div class="col-sm-5">

            <div className="form">
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="Nom de motif">Nom de motif:</label>
                    <input type="text" class="form-control"  placeholder="Enter le nom de motif" name="email" />
                </div>
            <div className="ref" >
            <label >le reference:</label>
            <input type="text" class="form-control" id="ref" placeholder=" reference" name="pwd" />
            </div>
            <div className="nbr">
            <label >le nombre de clichés:</label>
            <input type="text" class="form-control" id="pwd" placeholder="Nbr" name="pwd" />
            </div>
            <div className="etage">
            <label >Etage:</label>
            <input type="text" class="form-control" id="pwd" placeholder=" l'etage" name="pwd" />
            </div>
            
            
            <button className="btnstock" type="submit" class="btn btn-default">Submit</button>
          </form>
                    
        </div>
  
    </div>
      
    </div>

</div>
  );
}        
    
}

export default Newsel;