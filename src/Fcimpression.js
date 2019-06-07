import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';




class Fcimpression extends Component {
    render() { 
       return (

        <div>
      
       <img className="img1" src={this.props.logo} />
      
        <p style={{fontSize:"20px"}}>{this.props.name}</p>
      
</div>
  );
}        

       


    
}

export default Fcimpression;