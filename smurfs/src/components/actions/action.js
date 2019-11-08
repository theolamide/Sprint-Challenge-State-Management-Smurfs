import axios from 'axios';

export const SMURFS_LOADING = "SMURFS_LOADING";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILED = "SMURFS_FAILED";

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