import react from "react";
import Button from "./buttons";

const Screen = () => {
    return (
        <div id="screen" style={style.screen}>
            <div id="rest-screan">

            </div>
            <div id="btn-container" style={style.btnContainer}>

                <Button />
            </div>
        </div>
    );
}

const style = {
    screen: {
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '34px',
    },
    btnContainer: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1B1E26',
        position: 'absolute',
        top: '270px',
        borderBottomLeftRadius: '35px',
        borderBottomRightRadius: '35px',
        boxShadow: '5px -10px 15px -4px #403c47'

    }
}

export default Screen;