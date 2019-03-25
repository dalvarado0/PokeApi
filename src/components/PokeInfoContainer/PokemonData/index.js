import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import Moves from './Moves';
import './styles.css';

class PokeAPI extends Component{

    constructor(){
        super();
        this.state = {
            next: null,
            previous: null,
            result:[],
        }
    }

    componentDidMount(){
        this.GetPokemonsList();
    }

    GetPokemonsList = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
                .then(res =>{
                    //console.log(res);
                    this.setState({
                        next: res.data.next,
                        previous: res.data.previous,
                        result: res.data.results,
                    });
        });
    }

    getNext = (state) =>{
        return state.next;
    }

    getPrevious = (state) =>{
        return state.previous;
    }

    nextPage = () =>{
        axios.get(this.getNext(this.state))
                .then(res =>{
                    console.log("Siguiente Actualizado");
                    this.setState({
                        next: res.data.next,
                        previous: res.data.previous,
                        result: res.data.results,
                    });
                    console.log(this.state);
        });
    }

    previousPage = () =>{
        axios.get(this.getPrevious(this.state))
                .then(res =>{
                    console.log("Anterior Actualizado");
                    this.setState({
                        next: res.data.next,
                        previous: res.data.previous,
                        result: res.data.results,
                    });
                    console.log(this.state);
        });
    }

    render(){
        return(
            <div> 
                <div>
                    {
                        //console.log(this.state)
                    }
                {
                        this.state.result ?
                            this.state.result.map(pokemon => 
                                <div> 
                                    {pokemon.name}
                                    <Moves data={pokemon.url}>

                                    </Moves>
                                </div>):
                            <CircularProgress/>
                }
                </div>
                <div>
                    {
                        this.state.previous ?
                            <button onClick={this.previousPage}>Anterior</button> :
                            ""
                    }
                    {
                        this.state.next ?
                            <button onClick={this.nextPage}>Siguiente</button>:
                            ""
                    }
                    
                </div>
            </div>
        );
    }
}
export default PokeAPI;