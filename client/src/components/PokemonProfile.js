import React from 'react'
import fetchPokemon from '../App'

const PokemonProfile = (props, pokemons) => {
    
    
    const { match } = props;
    const { params } = match;
    const { id } = params
    
    console.log(pokemons);
    
    
    
    
    return (
        <div>
            Pokemon {id}
        </div>
    )
}

export default PokemonProfile
