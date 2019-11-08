import React from 'react';


const Smurf = props => {
    console.log(props.name)
    return(
        <p>{props.element.name}</p>
    )
}


export default Smurf