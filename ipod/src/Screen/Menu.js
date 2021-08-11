import React from 'react';
import MenuItem from './MenuItem';

//component when someone click on menu option

const Menu = (props) => {
    return (
        <div className="menu" >
            <div className="Menu-heading">

                <h3>IPOD</h3>
            </div>
            {/* {list with onclick event for rendering different component} */}

            <MenuItem OptionList={props.OptionList} Selected={props.Selected} />
        </div>
    )
}




export default Menu;