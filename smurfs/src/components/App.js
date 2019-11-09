import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import styles from './styles.css'
import Smurfs from "./Smurfs";



function App(props) {

    return (
      <div className="App">
        <Smurfs />
      </div>
    );
 
};


const mapStateToProps = (state) => {
  console.log(state)
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps,{}) (App);
