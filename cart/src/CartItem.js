import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {

            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        // this.state.qty = this.state.qty + 1;

        //this is 1 form of setState where you're not concern with the prev state of component.
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        //console.log(this.state);

        //this is 2 form of setState where you use prevState to modify the value and change it to new value.
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });

    }

    decreaseQuantity = () => {
        this.setState((prevState) => {
            if (prevState.qty != 0) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return {
                    qty: prevState.qty
                }
            }
        });
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 20 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className=".cart-item-actions">
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />

                        <img alt="remove" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png" />
                    </div>
                </div>

            </div>
        )
    }
}
const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'grey'
    }
}
export default CartItem;