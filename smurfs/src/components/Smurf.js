import React from 'react';


const Smurf = props => {
    
    return(        
        <p>My name is <strong>{props.element.name}</strong>. I am {props.element.age} years old and {props.element.height} tall. <br/> I am a SMURF.</p>
    )
}


export default Smurf