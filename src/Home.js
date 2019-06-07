import React, { Component } from 'react';

import './App.css';



class Home extends Component {
  
  
  render() {
    return (

      <div className="App">
        <div>
          <center><h1 className="titre2">Gestion de travail pour la société <h2 className="cogitel">Cogitel</h2> </h1><br />

          </center>

          <ul className="ulhome">
            <li><p><i>Partition:pour modifier les partion de groupe</i> </p></li>
            <li><p><i>Programme de travail:pour saisie le programme de travail</i> </p></li>
            <li><p><i>Stockage:pour saisie les noveaux motif</i> </p></li>
          </ul>
          
    </div>
        </div>
        );
      }        
    }
             
      
      
          
      
      
export default Home;