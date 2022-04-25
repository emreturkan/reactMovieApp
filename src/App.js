import React, { useEffect } from 'react'

import { useGlobalContext } from './context'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Populer from './pages/Populer';
import SinglePage from './pages/SinglePage';

const App = () => {
  const data = useGlobalContext()

  useEffect(()=>{
  })
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/popular' element={<Populer/>} />
      <Route path='/movie/:id' element={<SinglePage/>} />
    </Routes>
    </BrowserRouter>
  )

}

export default App