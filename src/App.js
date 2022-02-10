import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import About from './About'
import Home from './Home'


function App() {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, id) => {
          return { ...pokemon, id: id + 1 }
        })

        setPokemon({ ...data, results })
      })
  })

  return (
    <div className='container mx-auto'>
      <Router>
        <div className='mb-10 my-10'>
          <Link to={'/'}>
            <h3 className='text-2xl font-bold text-orange-500'>Pokemon info</h3>
          </Link>
        </div>

        <Routes>
          <Route path="/about/:slug" element={<About />} />
          <Route path="/" element={pokemon &&
            <Home pokemon={pokemon.results} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
