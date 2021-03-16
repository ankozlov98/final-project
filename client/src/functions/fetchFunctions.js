export function fetchPokemons () {
    return fetch('/pokemons')
      .then(res => res.json())      
  }
export function fetchCaughtPokemons () {
    return fetch('http://localhost:5000/caughtPokemons')
      .then(res => res.json())      
  }

export function fetchPokemon (id) {
    return fetch(`/pokemons/${id}`)
      .then(res => res.json())      
  }

  export default {fetchPokemon, fetchCaughtPokemons, fetchPokemons};
  