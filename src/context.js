import React,{useContext, useEffect, useReducer} from "react";
import reducer from './reducer'
const AppContext = React.createContext()

const initialState = {
    loading:true,
    popularMovies:[],
    search:'',
    allMovies:[],
    searchMovies:[],
    page:1
}

export const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const getAllMovie = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9d107d4813dc3bd9f2afaa908e7fd901&language=tr-TR&page=${state.page}`)
        const data = await response.json()
        dispatch({type:'GET_MOVIE',payload:data.results})
        
    }

    const getSearchMovie = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9d107d4813dc3bd9f2afaa908e7fd901&language=tr-TR&query=${state.search}&page=${state.page}&include_adult=false`)
        const data = await response.json()
        dispatch({type:'GET_SEARCH',payload:data.results})
    }

    const getPopular = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9d107d4813dc3bd9f2afaa908e7fd901&language=tr-TR&page=${state.page}`)
        const data = await response.json()
        dispatch({type:'GET_POPULER',payload:data.results})
    }

    const handleChange = (value)=>{
        dispatch({type:'GET_SEARCH_HANDLE',payload:value})
    }

    const handleClick = ()=>{
        getAllMovie()
        getPopular()
        state.search=""
        state.page=1
    }

    const prevButton = ()=>{
        dispatch({type:'HANDLE_PAGE',payload:'prev'})
    }
    const nextButton = ()=>{
        dispatch({type:'HANDLE_PAGE',payload:'next'})
    }


    useEffect(()=>{
        if(state.search.trim()===''){
            getAllMovie()
        }
        getSearchMovie()
        

        
    },[state.search,state.page])

    useEffect(()=>{
        getPopular()
    },[state.page])

    return <AppContext.Provider value={{...state,handleChange,handleClick,prevButton,nextButton}}>{children}</AppContext.Provider>
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}