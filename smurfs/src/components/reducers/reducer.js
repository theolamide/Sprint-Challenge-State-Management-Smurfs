import {SMURFS_LOADING,SMURFS_SUCCESS,SMURFS_FAILED} from '../actions/action';

const initialState={
    smurfs: [],
    isFetching: false,
    error: ''
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
        
      default:
        return state;
    }
  }
  
  export default reducer;
  