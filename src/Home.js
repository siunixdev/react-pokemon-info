import React from 'react'
import { Link } from 'react-router-dom'

function Home({ pokemon: results }) {
  return (
    <div className='flex flex-wrap'>
      {
        results && results.map((val, id) => (
          <div className='text-blue-400 mr-2' key={id}>
            <Link to={`/about/${val.id}`}>{val.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Home