import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Pokemon = ({thisPokemon}) => {

    //data.sprites.front_default

    const[onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    });

    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
       getPokemon(thisPokemon.url)
    })


    function setPokemonDetail (){
       
    }
    

    return(
        <div>

        <p>{onePokemon.name}
        </p>
        <img src={onePokemon.sprites.front_default} ></img>

        </div>


    )
}

export default Pokemon;