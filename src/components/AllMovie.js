import React from 'react'
import { useGlobalContext } from '../context'
import MovieCard from './MovieCard'
const AllMovie = () => {
    const {allMovies,searchMovies} = useGlobalContext()
 if(searchMovies){
    return (
     
        <div className='flex flex-wrap justify-center items-center'>
            {searchMovies.map((movie)=>(
                  <MovieCard key={movie.id} {...movie}/>
            ))}
           
        </div>
      )
 }


 

 return (
     
    <div className='flex flex-wrap justify-center items-center'>
        {allMovies.map((movie)=>(
              <MovieCard key={movie.id} {...movie}/>
        ))}
       
    </div>
  )
}

export default AllMovie