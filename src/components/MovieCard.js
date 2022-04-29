import React from 'react'
import { Link} from "react-router-dom";
const MovieCard = (movie) => {
  return (
    
    <div className='w-80 m-4 '>
        <Link className='flex flex-col justify-center items-center' to={`/movie/${movie.id}`}>
        <img className='max-h-96 rounded-md shadow-md' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` } alt="" />
        <h1 className='text-lg'>{movie.title}</h1></Link>
    </div>
    
  )
}

export default MovieCard