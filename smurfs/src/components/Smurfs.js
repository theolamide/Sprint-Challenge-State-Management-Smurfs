import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Smurf from "./Smurf";
import {fetchSmurfs} from './actions/action';


function Smurfs(props){
    useEffect(() => {
        props.fetchSmurfs();
    },[]);

    // console.log(props)
    if (props.isFetching){
        return <h2>Smurfs loading ...</h2>
    }

    return(
        <div>
            {/* {props.smurfs.name} */}
            
            {props.error && <p>{props.error}</p>};
            {props.smurfs.map(element => (
                <Smurf key={element.id} element={element}/>
            ))}
        </div>
        
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);