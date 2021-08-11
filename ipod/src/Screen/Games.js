import React from 'react';
//component when someone click on games option
const Games = () => {
    return (
        <div style={style.games}>
            <div style={style.divTwo}>

                <img style={style.DiceImg} alt="Game" src="https://image.flaticon.com/icons/png/512/246/246569.png" />
                <h3>Games</h3>
            </div>
        </div>
    )
}

//style for game component
const style = {
    games: {
        textAlign: 'center',
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        zIndex: '1S',
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopLeftRadius: '37px',
        borderTopRightRadius: '37px',
    },
    DiceImg: {
        width: 100,
        height: 100,
    },
    divTwo: {
        marginTop: '10vh',
    }
}

export default Games;