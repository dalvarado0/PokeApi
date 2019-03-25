import React from 'react';
import axios from 'axios';

var PokeImage;

const GetPokeImage = ({ data }) => {
    axios.get(data)
        .then(res => {
            PokeImage = res.data.sprites.front_default;
            console.log(PokeImage);
        });
        return(
            <img src={PokeImage} alt="Pokemon" />
        );
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