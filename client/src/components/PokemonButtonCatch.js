import React from 'react'
import { useState } from 'react';



const PokemonButtonCatch = ({forButton, pokemon}) => {

let status = "CATCH"



   if (pokemon.isCaught) {
       status = "CAUGHT";
   } else {status}
    

    const OnClick = (e) => {
        e.preventDefault();
        forButton(pokemon.id, true);
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
