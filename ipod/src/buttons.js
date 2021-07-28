import React from 'react'

const Button = () => {
    return (

        <div id="outer-circle" style={style.outerCircle}>
            <div style={style.menu}>Menu</div>
            <img alt="backward" src="https://image.flaticon.com/icons/png/128/3/3778.png" style={style.backward} />
            <img alt="play" src="https://image.flaticon.com/icons/png/128/64/64595.png" style={style.play} />
            <div id="inner-circle" style={style.innerCircle}>
                <img alt="forward" src="https://image.flaticon.com/icons/png/128/1/1824.png" style={style.forward} />

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
    },
    forward: {
        width: "20px",
        height: "20px",
        position: 'relative',
        top: '28px',
        left: '80px',


    },
    play: {
        width: "20px",
        height: "20px",
        position: 'relative',
        top: '100px',
        left: '45px'
    },
    menu: {
        position: 'relative',
        top: '10px',
        left: '55px',


    }
}

export default Button;