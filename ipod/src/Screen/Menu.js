import React from 'react';
import MenuItem from './MenuItem';
import './MenuStyle.css';

//component when someone click on menu option

const Menu = (props) => {
    console.log(props);
    return (
        <div id="menu" style={style.menu}>
            <h3 style={style.headingTwo}>IPOD</h3>
            {/* {list with onclick event for rendering different component} */}


            <MenuItem OptionList={props.OptionList} Selected={props.Selected} />
        </div>
    )
}

//style for Menu component
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