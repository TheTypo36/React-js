import React from 'react'
import './Music.css';

//component when someone click on music option
const Music = () => {
    return (
        <div id="music" style={style.Music}>
            <h3 style={style.headingTwo}>MUSIC</h3>
            <ul style={style.musicUl}>
                <li >
                    All Songs
                </li>
                <li id="Artists">
                    Artists
                </li>
                <li id="Album" >
                    Album
                </li>

            </ul>
        </div>
    )
}
//style for music component
const style = {
    Music: {
        height: '58%',
        width: '55%',
        backgroundColor: '#C1C2C4',
        color: 'black',
        position: 'absolute',
        top: '0',
        opacity: '0.7',
        borderTopLeftRadius: 40,
        zIndex: 1,
        padding: 5,
        transition: 'transform ease-in-out 2.0s'

    },
    headingTwo: {
        marginLeft: 30,
    },
    musicUl: {
        listStyle: 'NONE',
        marginLeft: '-30px',

    },

}


export default Music;