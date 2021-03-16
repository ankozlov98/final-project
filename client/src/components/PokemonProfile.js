import React from 'react';
import {useState, useEffect} from 'react';
import Specs from './Specs';
import  '../styles/profile.css';

const PokemonProfile = (props) => {
    
    const [pokemon, setPokemon] = useState({});

    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const { fetchPokemon } = props;
  
    

    useEffect( async () => {
            let result = await fetchPokemon(pokemonId)
            setPokemon(result)
        }, []);

    
        
    const specs = pokemon;

    
    
   
    
    
    return (
        <div className="ProfileContainer">
            <img className="profileImage"
                    src={`./public/pokemons/${pokemonId}.png`} 
                     onError={(e)=>{e.target.onerror = null; 
                     e.target.src=`/pokemons/def-logo.png`}}
                     alt={`it was a pokemon`} 
                     />
            <Specs specs={specs} />     
        </div>
    )
}

export default PokemonProfile
