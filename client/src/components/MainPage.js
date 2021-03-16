import React from 'react';
import '../styles/pokemon-card.css';

import PokemonCard from './PokemonCard';
import Pagination from './Pagination';


const MainPage = ({collectPokemon, pokemons, loading,  totalPokemons, paginate}) => {
    
    if (loading) {
        return (
            <h2> Loading</h2>
        )
            
    }
    return (
        <>
        <Pagination 
      totalPokemons={totalPokemons}
      paginate={paginate}/>
        <PokemonCard 
        collectPokemon={collectPokemon}
        pokemons={pokemons} 
        
        />
        <Pagination 
      totalPokemons={totalPokemons}
      paginate={paginate}/>
        </>
    )
}

export default MainPage