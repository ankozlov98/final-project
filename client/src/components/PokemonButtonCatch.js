import React from 'react'
import { useState } from 'react';
import { UploadCatchDate, changePokeState} from '../functions/Upload'


const PokemonButtonCatch = ({ pokemon, collectPokemon}) => {

let status = "CATCH"



   if (pokemon.isCaught) {
       status = "CAUGHT";
   } else {status}
    

    const OnClick = (e) => {
        e.preventDefault();
        changePokeState(pokemon.id, true);
        UploadCatchDate(pokemon.id, new Date())
        pokemon.isCaught = true;
        pokemon.date = new Date()
        collectPokemon(pokemon);
        e.target.textContent = "CAUGHT" 
        e.target.disabled = true;
        console.log(status);
         
        
        
    }

    return (
        <button 
        className="pokemon-card-button catch-button"
        onClick={OnClick}  disabled={ pokemon.isCaught }  >
               {status}
        </ button>    
             
    )
}

export default PokemonButtonCatch
