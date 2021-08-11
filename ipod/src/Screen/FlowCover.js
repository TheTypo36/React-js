import React from 'react';
const FlowCover = () => {
    return (
        <div style={style.flowcover}>

            <h3 id="flowcover-heading"> FlowCover</h3>
        </div>
    );

}

const style = {
    flowcover: {
        textAlign: 'center',
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        zIndex: '1',
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopLeftRadius: '37px',
        borderTopRightRadius: '37px',
    }
}

export default FlowCover;