import React from 'react';
import axios from 'axios';

const GetPokeImage = ({ data }) => {
    axios.get(data)
        .then(res => {
            const PokeImage = res.data.sprites.front_default;
            console.log("Pokemon name: "+ res.data.name);
            console.log("Image Pokemon URL: " +PokeImage);
            return(
                <img src={PokeImage} alt="Pokemon" />
            );
        });
}

const Image = ({data})=>{
    return(
    <div>  
        {
            GetPokeImage({data})
        }
    </div>
    );
};


export default Image;