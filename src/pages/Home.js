import React from 'react'
import AllMovie from '../components/AllMovie'
import Buttons from '../components/Buttons'
import Loading from '../components/Loading'
import SearchBar from "../components/SearchBar"
import { useGlobalContext } from '../context'
const Home = () => {
  const {loading} = useGlobalContext()
 if(loading){
   return <Loading />
 }

 return (
  <div >
    <SearchBar />
    <AllMovie />
    <Buttons />
  </div>
)
}

export default Home