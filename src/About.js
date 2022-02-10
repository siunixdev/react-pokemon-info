import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const { slug } = useParams()

  return (
    <div className='flex flex-wrap'>
      <div>Pokemon Info {slug}</div>
    </div>
  )
}

export default About