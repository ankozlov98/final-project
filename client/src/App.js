import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import MainPage from './components/MainPage'



const App = () => {
  //hooks
    // useState to get all the pokemons
    const [pokemons, setPokemons] = useState([]);
    // useState to get all the caughtPokemons
    
    //useState for loading process
    const [loading, setLoading]= useState(true);
    //useState for getting and setting a current page
    const [currentPage, setCurrentPage] = useState(1);
    //useState for declaring an amount of pokemons per page
    const pokemonsPerPage = 45;
    //useEffect for getting the required datum from server

     //constants for main page
     const indexOfLastPost = currentPage * pokemonsPerPage;
     const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
     const currentPokemons = pokemons.slice(indexOfFirstPost, indexOfLastPost);
     const paginate = (pageNumber) => setCurrentPage(pageNumber)
 
  useEffect(async () => {
    setLoading(true)

    let allPokemons = await fetchPokemons()
    setPokemons(allPokemons)
    setLoading(false)
  }, [])

  function changePokeState (id, isCaught) {
    fetch(`/pokemons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCaught }),
      headers: new Headers({ 'Content-Type': 'application/json' }) 
    })
  }

  function fetchPokemons () {
    return fetch('/pokemons')
      .then(res => res.json())      
  }

  function fetchPokemon (id) {
    return fetch(`/pokemons/${id}`)
      .then(res => res.json())      
  }


  
let caughtPokemons = pokemons.filter(monster => monster.isCaught);

  let pokemonCards = caughtPokemons.map(monster => <div key={monster.id}>{monster.name}</div>)
  // let pokemonCards = pokemons.length && pokemons.map(monster => <div id={monster.id}>{monster.name}</div>)
  
  return (
    <div>
      <Header className="header-base"/>
      <MainPage 
      pokemons={currentPokemons} 
      loading={loading} 
      forButton={changePokeState}
      pokemonsPerPage={pokemonsPerPage}
      totalPokemons={pokemons.length}
      paginate={paginate}
      />
      
    </div>
  )
}

export default App
