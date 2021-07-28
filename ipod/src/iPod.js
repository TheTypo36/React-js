import React from 'react';
import Screen from './Screen';

const Ipod = () => {
    return (
        <div className="Ipod" style={style.Ipod}>
            <Screen />
        </div>
    )
}

const style = {
    Ipod: {

        height: 450,
        width: 200,
        backgroundColor: '#EAEEF2',
        border: '4px solid #293031 ',
        margin: 'auto',
        position: 'relative',
        top: '20vh',
        borderRadius: '40px',
        boxShadow: '#969891 -7px 5px 16px 2px'
    }
}

export default Ipod;