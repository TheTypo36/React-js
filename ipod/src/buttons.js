import React from 'react';
const Button = (props) => {


    return (

        <div className="button-container">
            <div className="Select" >
                <h3>Press</h3>
            </div>
            <div className="Menu" onClick={props.displayMenu}>
                Menu
            </div>
            <div className="Play">
                <i className="fas fa-play"></i>

            </div>
            <div className="Forward">
                <i className="fas fa-forward"></i>

            </div>
            <div className="Backward">
                <i className="fas fa-backward"></i>
            </div>
        </div>
    )

}








export default Button;