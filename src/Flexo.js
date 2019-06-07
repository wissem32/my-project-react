import React, { Component } from 'react';

import './App.css';
 import moment from'moment'


class Flexo extends Component {
    constructor(props){
        super(props);
      this.state={
        incr:1,
        groupe1:"sadek et Kamel",
        groupe2:"habib et bilel",
        groupe3:"abd et rami",
        groupe4:"sami et anwar"
      };
    }
    render() {
        
            
    this.change=()=>{
        let date=new Date('2019/1/1')
        //  let date=moment().format('MMMM Do YYYY, h:mm a');
        //  alert(date);
         let date2=moment(date).add(1,'day)')
        //  alert(date2)
        if (this.state.incr==4){
            this.state.incr=1;
        }
        let I=this.state.incr +1 ;
this.setState({incr:I})
if (this.state.incr==1){
    this.setState({groupe1:"sami et anwer"})
    this.setState({groupe2:"sadek et kamel"})
    this.setState({groupe3:"habib et bilel"})
    this.setState({groupe4:"abd et anwer"})

    
}
else if (this.state.incr==2){
    this.setState({groupe1:"abd et anwe"})
    this.setState({groupe2:"sami et anwer"})
    this.setState({groupe3:"sadek et kamel"})
    this.setState({groupe4:"habib et bile"})

}
else if (this.state.incr==3){
    this.setState({groupe1:"habib et bile"})
    this.setState({groupe2:"abd et anwe"})
    this.setState({groupe3:"sami et anwer"})
    this.setState({groupe4:"sadek et kamel"})

}
if (this.state.incr==4){
    this.state.incr=1;
}
        }
        return (

 <div>
                <div style={{ display: "inline-block", margin:"6px"}}>
                    <div className="matin" ></div> <p>Matin</p>
                </div>
                <div style={{ display: "inline-block", margin:"6px"}} >

                    <div className="soir" ></div><p>Soir</p>
                </div>
                <div style={{ display: "inline-block", margin:"6px"}} >

                    <div className="nuit" ></div><p>Nuit</p>
                </div>
                <button onClick={()=>this.change()} style={{ display: "inline-block"}} type="button" class="btn btn-default">Change</button>

            <div>
                <div style={{dislay:"inlineBlock"}}>
                    <h4>poste matin:</h4>
                </div>

                <div className="green" style={{ backgroundColor: "white",dislay:"inlineBlock" }} >
                    <h2 style={{color:"green"}}>{this.state.groupe1}</h2>
                </div>
         </div>

         <div>
                <div style={{dislay:"inlineBlock"}}>
                    <h4>poste soir:</h4>
                </div>
                <div className="blue" style={{ backgroundColor: "white",dislay:"inlineBlock" }} >
                    <h2 style={{color:"bleu"}}>{this.state.groupe2}</h2>

                </div>
       </div>


       <div>
                <div style={{dislay:"inlineBlock"}}>
                    <h4>poste nuit:</h4>
                </div>
                <div className="black" style={{ backgroundColor: "white",dislay:"inlineBlock" }} >
                    <h2 style={{color:"red"}}>{this.state.groupe3}</h2>

                </div>

        </div>     
</div>
        );
    }





}

export default Flexo;