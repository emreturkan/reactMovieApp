import React from 'react'
import { SpinnerCircular } from 'spinners-react';


const Loading = () => {
  return (
  <div className='h-screen w-screen flex items-center justify-center'>
        <SpinnerCircular size='200' color='#2498ab' />
  </div>
  )
}

export default Loading