export  function UploadCatchDate (id, date) {
    fetch(`/pokemons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ date }),
      headers: new Headers({ 'Content-Type': 'application/json' }) 
    })
  }

  export function changePokeState (id, isCaught) {
    fetch(`/pokemons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCaught }),
      headers: new Headers({ 'Content-Type': 'application/json' }) 
    })
  }

export default {UploadCatchDate, changePokeState}