import React, { Component } from 'react';

import './App.css';






class Inciflex extends Component {


  render() {

    return (

      <div>


        <center><h3 className="titre">Stockage des clichés Inciflex </h3></center>
        <div class="row">

          <div class="col-sm-3">
            <img className="imgstock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4JwQXW7flBwT_Qe5slOOxvoEf7rWikJf_8TGCTMdzj7igXpP" />
          </div>

          <div class="col-sm-5">
            <div className="form">
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="Nom de motif">Nom de motif:</label>
                  <input type="text" class="form-control" placeholder="Enter le nom de motif" name="email" />
                </div>
                <div className="ref" >
                  <label >le reference:</label>
                  <input type="text" class="form-control" id="ref" placeholder=" Reference" name="pwd" />
                </div>
                <div className="nbr">
                  <label >le nombre de clichés:</label>
                  <input type="text" class="form-control" id="pwd" placeholder="Nbr" name="pwd" />
                </div>
                <div className="etage">
                  <label >Etage:</label>
                  <input type="text" class="form-control" id="pwd" placeholder="Etage" name="pwd" />
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

export default Inciflex;