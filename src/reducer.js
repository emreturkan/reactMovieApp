

const reducer = (state,action) => {
    switch(action.type){
        case 'LOADING':{
            return {...state, loading:true}
        }

        case 'GET_POPULER':{
            return {...state,loading:false,popularMovies:action.payload}
        }

        case 'GET_MOVIE':{
            return {...state,loading:false,allMovies:action.payload}
        }

        case 'GET_SEARCH':{
            return {...state,loading:false,searchMovies:action.payload}
        }

        case 'GET_SEARCH_HANDLE':{
            return {...state,loading:false,search:action.payload}
        }
        
        case 'HANDLE_PAGE':{
            if(action.payload==='prev'){
                if(state.page >1){
                    return{...state,loading:false,page:state.page-1}
                }
            }
            else{
                return{...state,loading:false,page:state.page+1}
            }
        }

        default:{
            return state
            
        }

    }
}

export default reducer