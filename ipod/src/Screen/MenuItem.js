import React from 'react';

class MenuItem extends React.Component {
    render() {
        const { OptionList } = this.props;

        return (

            OptionList.map((item, index) => {

                return (
                    <div className={this.props.selected === index ? "Selected" : ""} key={index}>

                        <p>{item}</p>
                    </div>
                );


            })
        );
    }
}

export default MenuItem;