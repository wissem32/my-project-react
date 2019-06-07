import React, { Component } from 'react';

import './App.js';
import './App.css';
import { isTSDeclareMethod } from '@babel/types';



class Phelio7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: [{motif: 'czfzfzf', metrage:"cdzez", heure:0}],
            nom: "",
            metrage: "",
            heure:0,
        };
    }

    render() {
        this.change = () => {
            let met=document.getElementById("metre").value ; 

            this.state.heure=met/10000+"h";

            this.setState({ element: [...this.state.element, {motif: this.state.motif, metrage: this.state.metrage,heure:this.state.heure}] })

           


        }

        
        return (

            <div>
                <center><h2 className="titre">Programme de Travail de la machine Helio 7 </h2></center>
                <div class="form-inline">

                    <div class="form-group">
                        <label >Nom de motif</label>
                        <input value={this.state.motif} onChange={(event) => { this.setState({ motif: event.target.value }) }} class="form-control" id="motif" placeholder="Enter motif" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Metrage:</label>
                        <input value={this.state.metrage} onChange={(event) => { this.setState({ metrage: event.target.value }) }} class="form-control" id="metre" placeholder="Enter le metrage" />
                    </div>


                    <button type="button" class="btn btn-default" onClick={() => this.change()}>ok</button>
                </div>



                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom de motif</th>
                            <th>Metrage</th>
                            <th>Duré</th>

                        </tr>
                    </thead>
                    <tbody>


                            {this.state.element.map((item, index) => {
                                return (
                                    <tr >
                                        <td key={index}><h3>{item.motif}</h3></td>
                                        <td key={index}><h3>{item.metrage}</h3></td>
                                        <td key={index}><h3>{item.heure}</h3></td>

                                    </tr>
                                )
                            })}




          
                    </tbody>
                </table>




            </div>
        );
    }

}


export default Phelio7;