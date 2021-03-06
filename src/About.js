import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

function About() {
  const { slug } = useParams()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        console.log(data);
      })
  }, [slug])

  return (
    <div className='flex flex-wrap'>
      {
        pokemon && (
          <div className='bg-white p-8 shadow-lg rounded-lg'>
            <h3 className='text-center'>{pokemon.name}</h3>
            <div className='flex'>
              <LazyLoad height={200}>
                <img src={pokemon.sprites['front_shiny']} height={200} />
              </LazyLoad>
              <LazyLoad height={200}>
                <img src={pokemon.sprites['back_shiny']} height={200} />
              </LazyLoad>
            </div>
            <div className='mt-4'>
              <span>Type :</span>
              <div className='mt-4'>
                {
                  pokemon.types.map((val, i) => (
                    <span key={i} className='p-2 bg-slate-300 text-slate-900 mr-2'>{val.type.name}</span>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default About