import React from 'react';

//component when someone click on Setting option

const Setting = () => {
    return (

        <div style={style.setting}>
            <div style={style.DivTwo}>
                <img style={style.SettingImg} alt="setting" src="https://image.flaticon.com/icons/png/512/126/126472.png" />
                <h3 > Setting </h3>
            </div>
        </div>
    )
}
//style for Setting component
const style = {
    setting: {
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
    SettingImg: {
        width: 100,
        height: 100,
    },
    DivTwo: {
        marginTop: '10vh',
    }
}

export default Setting;