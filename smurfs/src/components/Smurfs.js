import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux';
import Smurf from "./Smurf";
import {fetchSmurfs,postSmurfs} from './actions/action';


function Smurfs(props){
    const [smurfData, setSmurfData] = useState({name:'',age:'',height:''});

    useEffect(() => {
        props.fetchSmurfs();
    },[props.changeTrigger]);

    const submitForm = event => {
        event.preventDefault();
        props.postSmurfs(smurfData);
        setSmurfData({name:'',age:'',height:''});
    }

    const handleChange = event => {
        setSmurfData({...smurfData, [event.target.name]: event.target.value});
    }

    // console.log(props)
    if (props.isFetching || props.isPosting){
        return <h2>Smurfs loading ...</h2>
    }

    return(
        <div>            
            <h2>SMURFS VILLAGE</h2>
                <form onSubmit={submitForm}>
                    <input
                        name="name"
                        id='name'
                        type="text"
                        placeholder="Name"
                        value={smurfData.name}
                        onChange={handleChange}
                    />

                    <input
                        name="age"
                        id='age'
                        type="text"
                        placeholder="Age"
                        value={smurfData.age}
                        onChange={handleChange}
                    />

                    <input
                        name="height"
                        id='height'
                        type="text"
                        placeholder="Height"
                        value={smurfData.height}
                        onChange={handleChange}
                    />

                    <button>Enter</button>
                </form>



            {props.error && <p>{props.error}</p>}
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
        error: state.error,
        isPosting: state.isPosting,
        changeTrigger: state.changeTrigger
    };
};

export default connect(mapStateToProps, {fetchSmurfs,postSmurfs})(Smurfs);