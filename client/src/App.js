import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import MainPage from './components/MainPage'
import CaughtPokemons from './components/CaughtPokemons'
import PokemonProfile from './components/PokemonProfile';


const App = () => {
  //hooks
    // useState for getting specific pokemon
    
    // useState to get all the pokemons
    const [pokemons, setPokemons] = useState([]);
    // useState to get all the caughtPokemons
    const [caughtPokemons, setCaughtPokemons] = useState([]);
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

  useEffect(async () => {
    setLoading(true)

    let allCaughtPokemons = await fetchCaughtPokemons()
    setCaughtPokemons(allCaughtPokemons)
    setLoading(false)
  }, [])

  function changePokeState (id, isCaught) {
    fetch(`/pokemons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCaught }),
      headers: new Headers({ 'Content-Type': 'application/json' }) 
    })
  }

  function UploadCatchDate (id, date) {
    fetch(`/pokemons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ date }),
      headers: new Headers({ 'Content-Type': 'application/json' }) 
    })
  }

  function fetchPokemons () {
    return fetch('/pokemons')
      .then(res => res.json())      
  }
  function fetchCaughtPokemons () {
    return fetch('http://localhost:5000/caughtPokemons')
      .then(res => res.json())      
  }

  function fetchPokemon (id) {
    return fetch(`/pokemons/${id}`)
      .then(res => res.json())      
  }

  const collectPokemon = async (pokemon) => { 
    const res = await fetch('http://localhost:5000/caughtPokemons',
      {
        method: "POST",
        headers: {
      'Content-type': 'application/json'
      },
        body: JSON.stringify(pokemon)
    })
  
      const caughtPokemon = await res.json();
      setCaughtPokemons([...caughtPokemons, caughtPokemon]);
  } 

  
// let caughtPokemons = pokemons.filter(monster => monster.isCaught);
const pokemon2 = fetchPokemon(2)
  console.log(pokemon2);
  // let pokemonCards = caughtPokemons.map(monster => <div key={monster.id}>{monster.name}</div>)
  // let pokemonCards = pokemons.length && pokemons.map(monster => <div id={monster.id}>{monster.name}</div>)
  
  return (
    <Router>
      <div>
        
        <Header className="header-base"/>
        <Switch>     
              <Route
                  path='/'
                  exact
                  render={() => (
                    
        <MainPage 
        pokemons={currentPokemons} 
        loading={loading} 
        forButton={changePokeState}
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.length}
        collectPokemon={collectPokemon}
        paginate={paginate}
        UploadCatchDate={UploadCatchDate}
        />
        )}/>
       <Route
       path='/COLLECTION'
       exact
       render={() => (
        <CaughtPokemons 
              pokemons={caughtPokemons} 
              loading={loading} />
              )}
              />
        <Route
       path='/:pokemonId?'
       exact
       render={(props) => (
        <PokemonProfile {...props} fetchPokemon={fetchPokemon}/>
              )}
              />

    </Switch> 
      </div>

    </Router>
  )
}

export default App
