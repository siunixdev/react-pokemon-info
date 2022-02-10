import React from 'react'
import { Link } from 'react-router-dom'

function Home({ pokemon: results }) {
  return (
    <div className='grid grid-cols-6 gap-2'>
      {
        results && results.map((val, id) => (
          <div className='p-4 bg-white rounded-lg'>
            <div className='text-blue-400 mr-2' key={id}>
              <Link to={`/about/${val.id}`}>{val.name}</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home