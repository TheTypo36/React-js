import React from 'react';

const Games = () => {
    return (
        <div style={style.games}>
            <div style={style.divTwo}>

                <img style={style.DiceImg} alt="Game" src="https://img.freepik.com/free-vector/red-dice-isolated-transparent_44392-298.jpg?size=338&ext=jpg" />
                <h3>Games</h3>
            </div>
        </div>
    )
}

const style = {
    games: {
        textAlign: 'center',
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        zIndex: '10',
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