import React from 'react';
import '../styles/pokemon-card.css';
import PokemonButtonCatch from './PokemonButtonCatch';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';


const MainPage = ({pokemons, loading, forButton, pokemonsPerPage, totalPokemons, paginate}) => {
    
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
        <PokemonCard pokemons={pokemons} forButton={forButton}/>
        </>
    )
}

export default MainPage