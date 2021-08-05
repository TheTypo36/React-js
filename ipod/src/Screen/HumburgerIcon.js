import React from 'react';

const HumbergerIcon = () => {

    return (
        <img src="https://t3.ftcdn.net/jpg/01/66/66/56/240_F_166665616_guHEOd6zztex1rqNXoVzW2tNxIclPJpw.jpg" alt="menu" style={style.HumburgerImg} />

    )
}

const style = {

    HumburgerImg: {
        height: 40,
        width: 40,

        position: 'absolute',
        borderRadius: 40,
        top: 10,
        left: 10,
    }
}
export default HumbergerIcon;