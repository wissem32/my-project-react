import React, { Component } from 'react';

import { BrowserRoute, NavLink } from 'react-router-dom'

class Bouton extends Component {


  render() {
    return (
      <div className="bouton">

        <div className="btn1">
{/* <input id="pass1" type="password" /> */}
          <NavLink to="/Admin"><button style={{width:"100px",height:"50px"}}> Admin</button> </NavLink>
        </div>

        <div className="btn2">
        {/* <input id="pass2" type="password" /> */}

          <NavLink to="/Utilisateur"><button style={{width:"100px",height:"50px"}}>Utilisateur </button></NavLink>
        </div>

      </div>

    )
  }
}

export default Bouton;