import axios from 'axios';

export const SMURFS_LOADING = "SMURFS_LOADING";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILED = "SMURFS_FAILED";

export const SMURFS_POST_LOADING = "SMURFS_POST_LOADING";
export const SMURFS_POST_SUCCESS = "SMURFS_POST_SUCCESS";
export const SMURFS_POST_FAILED = "SMURFS_POST_FAILED";

export const fetchSmurfs = () => {
    return (dispatch ) => {
    dispatch({type: SMURFS_LOADING})
    axios.get("http://localhost:3333/smurfs")
    .then(res=> {
        console.log(res.data)
        return dispatch({type: SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error=>dispatch({type: SMURFS_FAILED, payload: error.res}))
    }
}

export const postSmurfs = (character) => {
    return (dispatch) => {
        dispatch({type: SMURFS_POST_LOADING})
        axios.post("http://localhost:3333/smurfs", character)
        .then(res=> {
            console.log("Post data here:",res.data)
            return dispatch({type: SMURFS_POST_SUCCESS, payload: res.data})
        })
        .catch(error=>dispatch({type: SMURFS_POST_FAILED, payload: error.res}))
    }

}
    