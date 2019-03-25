import React from 'react';
import axios from 'axios';

import Image from './Image';

var abilityNames = [];

const GetPokeAbilities = ({ data }) => {
    axios.get(data)
        .then(res => {
            const abilities = res.data.abilities;
            abilityNames = abilities.map(ability => ability.ability.name);
            //image = res.data.sprites.front_default;
            //resPoke = res;
            //GetImage();
        });
    return(abilityNames);
}

const PokemonMoves = ({ data }) => {
    const Display = GetPokeAbilities({ data });
    return (<div>
        {
            <Image data={data} ></Image>
        }
        {
            <ul>{Display.map(Display => <li>{Display}</li> )} </ul>
        }
    </div>);
}


export default PokemonMoves;