import React from 'react';
import '../styles/pokemon-card.css';

import PokemonCard from './PokemonCard';
import Pagination from './Pagination';


const MainPage = ({collectPokemon, pokemons, loading, forButton, pokemonsPerPage, totalPokemons, paginate, UploadCatchDate}) => {
    
    if (loading) {
        return (
            <h2> Loading</h2>
        )
            
    }
    return (
        <>
        <Pagination pokemonsPerPage={pokemonsPerPage}
      totalPokemons={totalPokemons}
      paginate={paginate}/>
        <PokemonCard 
        collectPokemon={collectPokemon}
        pokemons={pokemons} forButton={forButton} collectPokemon={collectPokemon}
        UploadCatchDate={UploadCatchDate}
        />
        <Pagination pokemonsPerPage={pokemonsPerPage}
      totalPokemons={totalPokemons}
      paginate={paginate}/>
        </>
    )
}

export default MainPage