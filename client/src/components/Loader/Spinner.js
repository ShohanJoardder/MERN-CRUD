import React from 'react'
import spinner from '../../assets/img/Spinner.svg'

const Spinner = () => {
  return (
      <div className='d-flex justify-content-center align-items-center'>
        <img alt='Spinner' src={spinner}/>       
      </div>
  )
}

export default Spinner
