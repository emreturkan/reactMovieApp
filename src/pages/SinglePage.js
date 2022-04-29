import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const SinglePage = () => {
  const {id} = useParams()
  const [movie,setMovie] = useState([])
  const navigate = useNavigate()

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
    <div className='flex flex-wrap xl:justify-start sm:justify-center mt-12'>
       <img className='md:h-[700px] h-96 xl:ml-72 xl:mr-48 ml-36 rounded-md shadow-md' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` } alt="" />
       <div className='mt-12 flex flex-col items-start  ml-24 xl:ml-0 mb-8 '>
       <p className='xl:text-5xl text-2xl font-bold  mt-2'>{movie.title}</p>
       <p className='text-xl font-light mt-2 w-96'>{movie.overview}</p>
       <div className='flex mt-4 justify-around items-center'>
        <h1 className='font-bold'>TMDB: </h1>
       <span className='px-4 py-2 ml-12 rounded-md bg-blue-800 text-white shadow-md'>{movie.vote_average}</span>
       </div>
        <div className='flex flex-wrap  w-full mt-6'>
          <span className='font-bold mr-4'>Kategoriler: </span>
        {movie && movie?.genres?.map((gen,index)=>(
          <div className='flex justify-around mr-2 '>
            <span className='px-4 py-2 bg-red-500 rounded-md text-white shadow-md' key={index}>{gen.name}</span>
          </div>
        ))}
        </div>
       <button onClick={()=>{navigate(-1)}} className='mt-12 px-4 py-2 bg-blue-800 rounded-md shadow-md text-white'>Geri Dön</button>
       </div>
    </div>
    </>
  )
}

export default SinglePage