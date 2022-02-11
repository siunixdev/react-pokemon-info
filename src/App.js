import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import About from './About'
import Home from './Home'


function App() {

  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [pokemon, setPokemon] = useState()
  const [text, setText] = useState("")
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [next, setNext] = useState("")
  const [previous, setPrevious] = useState("")

  useEffect(() => {
    fetchPokemon(apiUrl)
  }, [])

  const fetchPokemon = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon) => {
          const id = pokemon.url.split('/')

          return { ...pokemon, id: id[6] }
        })

        setPokemon({ ...data, results })
        setNext(data.next)
        setPrevious(data.previous)
      })
  }

  const getNextPage = () => {
    fetchPokemon(next)
  }

  const getPreviousPage = () => {
    fetchPokemon(previous)
  }

  return (
    <div className='container mx-auto'>
      <Router>
        <div className='flex flex-col justify-center'>
          <div className='mb-10 my-10'>
            <Link to={'/'}>
              <h3 className='text-2xl font-bold text-orange-500'>Pokemon info</h3>
            </Link>
          </div>

        </div>

        <Routes>
          <Route path="/about/:slug" element={<About />} />
          <Route path="/" element={pokemon &&
            <div>
              {/* <div className='flex flex-col mb-8'>
                <span className='mb-2'>Search</span>
                <input type="text" className='p-2 rounded-lg shadow-lg' placeholder='Enter Pokemon Name'
                  onChange={($event) => fetchPokemon($event.target.value)}
                />
              </div> */}
              <Home pokemon={pokemon.results} />
              <div className='mt-8 flex justify-center'>
                {
                  previous && (
                    <button className='px-4 py-3 mx-2 bg-white rounded-lg shadow-lg' onClick={() => getPreviousPage()}>Previous</button>
                  )
                }
                {
                  next && (
                    <button className='px-4 py-3 mx-2 bg-white rounded-lg shadow-lg' onClick={() => getNextPage()}>Next</button>
                  )
                }
              </div>
            </div>
          } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
