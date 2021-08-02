import React from 'react';
import './MenuStyle.css';
const Menu = (props) => {
    console.log(props);
    return (
        <div id="menu" style={style.menu}>
            <h3 style={style.headingTwo}>IPOD</h3>
            <ul style={style.menuUl}>
                <li id="cover-Flow" onClick={props.displayFlowCover}>
                    Cover Flow
                </li>
                <li id="Music">
                    Music
                </li>
                <li id="Games" onClick={props.displayGame}>
                    Games
                </li>
                <li id="Setting" onClick={props.displaySetting}>
                    Setting
                </li>
            </ul>
        </div>
    )
}

const style = {
    menu: {
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
    },
    headingTwo: {
        marginLeft: 30,
    },
    menuUl: {
        listStyle: 'NONE',
        marginLeft: '-30px',

    },

}

export default Menu;