import React from 'react'
import { useGlobalContext } from '../context'

const Buttons = () => {
    const {nextButton,prevButton,page} = useGlobalContext()
  return (
    <div className='flex justify-around items-center my-5'>
        <button onClick={prevButton}  className='px-4 py-2 rounded bg-indigo-500 text-white'>PREV</button>
        <button onClick={nextButton} className='px-4 py-2 rounded bg-indigo-500 text-white'>NEXT</button>
    </div>
  )
}

export default Buttons