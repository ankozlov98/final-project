import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/pokemon-card.css';
import PokemonButtonCatch from './PokemonButtonCatch'

const PokemonCard = ({pokemons, forButton, collectPokemon,UploadCatchDate}) => {
console.log(pokemons)
return (

  
       <div className="pokemon-card-container">

        {pokemons.map((pokemon)=> (
            
            <div key={pokemon.id} 
            onLoad={()=>{if (pokemon.isCaught === undefined) pokemon.isCaught = false }}
            className="pokemon-card">
                
                <div className='pokemon-card-name'>{pokemon.name}</div>
                <Link to={'/'+`${pokemon.id}`} >
                 <img src={`./public/pokemons/${pokemon.id}.png`} 
                     onError={(e)=>{e.target.onerror = null; 
                     e.target.src=`/pokemons/def-logo.png`}}
                     alt={`it was a pokemon`} 
                     />
                </Link>
                <PokemonButtonCatch pokemon={pokemon} forButton={forButton} collectPokemon={collectPokemon} UploadCatchDate={UploadCatchDate}/>
            </div>
        ))}
        
        </div> 
    )
}

export default PokemonCard
