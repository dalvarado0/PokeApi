import React, { Component } from 'react';
//import CircularProgress from '@material-ui/core/CircularProgress';

import ListPokemons from './PokemonData';

class PokeInfoContainer extends Component {
    constructor(){
        super();
        this.state={
            pokemons: null,
        }
    }

    componentDidMount(){

    }

    handleUpdateClic(){

    }

    render(){
        return(
            <div>
                <ListPokemons>
                    
                </ListPokemons>
            </div>
        );
    }
}

export default PokeInfoContainer;