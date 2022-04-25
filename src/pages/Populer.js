import React from 'react'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import SearchBar from "../components/SearchBar"
import Buttons from '../components/Buttons'
const Populer = () => {
  const {loading,popularMovies,searchMovies} = useGlobalContext()
 if(loading){
   return <Loading />
 }


 if(searchMovies){
  return (
    <div>
      <SearchBar />
      <div className='flex flex-wrap justify-center items-center'>
          {searchMovies.map((movie)=>(
                <MovieCard key={movie.id} {...movie}/>
          ))}
         
      </div>
      <Buttons />
    </div>
    )
}

 return (
  <div >
    <SearchBar />
    
    <div className='flex flex-wrap justify-center items-center'>
    {popularMovies.map((movie)=>(
          <MovieCard key={movie.id} {...movie}/>
    ))}
   
  </div>
  <Buttons/>

  </div>
)
    }

export default Populer