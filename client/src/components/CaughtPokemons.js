import React from 'react';
import PokemonCard from './PokemonCard';

const CaughtPokemons = ({pokemons, loading}) => {
    
    if (loading) {
        return (
            <h2> Loading</h2>)    
    }

    
    return (
        <>
        <PokemonCard 
        pokemons={pokemons}
        
        />
        </>
    )
}

export default CaughtPokemons