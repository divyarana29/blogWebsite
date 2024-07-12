import React from 'react'
import logoo from '../components/logo.png'

function Logo({width = '100px'}) {
  return (
    <div><img className='rounded-xl w-20' src={logoo} alt="" /></div>
  )
}

export default Logo