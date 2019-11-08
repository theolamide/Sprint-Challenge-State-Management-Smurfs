import {SMURFS_LOADING,SMURFS_SUCCESS,SMURFS_FAILED,SMURFS_POST_LOADING,SMURFS_POST_SUCCESS,SMURFS_POST_FAILED} from '../actions/action';

const initialState={
    smurfs: [],
    isFetching: false,
    error: '',
    isPosting: false
};

function reducer(state = initialState, action) {
    // console.log("reducer", action);
    switch (action.type) {
        case SMURFS_LOADING:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        
        case SMURFS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }

        case SMURFS_FAILED:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        case SMURFS_POST_LOADING:
            return{
                ...state,
                isPosting: true,
                error:''
            }

        case SMURFS_POST_SUCCESS:
            return{
                ...state,
                isPosting: false,
                error:''
            }
        
        case SMURFS_POST_FAILED:
            return{
                ...state,
                isPosting: false,
                error: action.payload
            }
        
      default:
        return state;
    }
  }
  
  export default reducer;
  