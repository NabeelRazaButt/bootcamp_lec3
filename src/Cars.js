import React from 'react';
function Car(props){
    return(
        <div>
            <h1>Car Name:{props.carMake}</h1>
            <h1>Car Model:{props.carModel}</h1>    
        </div>

    )
}
export default Car;