import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const SinglePage = () => {
  const {id} = useParams()
  const [movie,setMovie] = useState([])

  const getMovie = async()=>{
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=9d107d4813dc3bd9f2afaa908e7fd901&language=tr-TR`)
    const data = await response.json()
    setMovie(data)
    
  }


  useEffect(()=>{
    getMovie()
  },[])

  return (
    <>
    <SearchBar />
    <div className='flex flex-wrap flex-col justify-center items-center mt-12'>
       <img className='max-h-96 rounded-md' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` } alt="" />
       <p className='text-3xl mt-2'>{movie.title}</p>
       <p className='text-lg mt-2 w-96'>{movie.overview}</p>
        <div className='flex justify-around w-96 mt-6'>
        {movie && movie?.genres?.map((gen,index)=>(
          <span className='px-4 py-2 bg-red-500 rounded-md text-white' key={index}>{gen.name}</span>
        ))}
        </div>
    </div>
    </>
  )
}

export default SinglePage