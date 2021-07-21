import React from 'react';

class CartItem extends React.Component {

    render() {
        //console.log(this.props);
        const { price, title, qty } = this.props.product;
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
                            onClick={() => this.props.increaseQuantity(this.props.product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick={() => this.props.decreaseQuantity(this.props.product)}
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