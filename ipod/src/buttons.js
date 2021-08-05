import React from 'react';
const Button = (props) => {


    return (

        <div className="OuterCircle" style={style.outerCircle}>
            <div className="InnerCircle" style={style.menu} onClick={props.displayMenu}>Menu</div>
            <img alt="backward" src="https://image.flaticon.com/icons/png/128/3/3778.png" style={style.backward} />
            <img alt="play" src="https://image.flaticon.com/icons/png/128/64/64595.png" style={style.play} />
            <img alt="forward" src="https://image.flaticon.com/icons/png/128/1/1824.png" style={style.forward} />
            <div id="inner-circle" style={style.innerCircle}>
            </div>
        </div>
    )

}

const style = {
    outerCircle: {
        height: 150,
        width: 150,
        borderRadius: '50%',
        backgroundColor: '#222731',

        position: 'absolute',
        top: '15px',
        left: '25px',
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bolder',
    },
    innerCircle: {
        height: 70,
        width: 70,
        borderRadius: '50%',
        backgroundColor: '#1B1E26',
        position: 'relative',
        top: '-5px',
        left: '40px',
    },
    backward: {
        width: "20px",
        height: "20px",
        position: 'relative',
        top: '47px',
        left: '6px',
        cursor: 'pointer',
    },
    forward: {
        width: "20px",
        height: "20px",
        position: 'relative',
        top: '28px',
        left: '80px',
        cursor: 'pointer',


    },
    play: {
        width: "20px",
        height: "20px",
        position: 'relative',
        top: '100px',
        left: '45px',
        cursor: 'pointer',

    },
    menu: {
        position: 'relative',
        top: '10px',
        left: '55px',

        cursor: 'pointer',

    }
}

export default Button;