import React from 'react';
import Pokemon from './Pokemon';

//props 
const DisplayPokemons = ({pokemons}) => {


return(
    <div>
        {
            pokemons.map((val, i) => 
                    //console.log('teste');
                <Pokemon key={i} thisPokemon={val}/>
            )
        }
        


    </div>
)


}

export default DisplayPokemons;