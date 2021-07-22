import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const
        {
            product,
            decreaseQuantity,
            increaseQuantity,
            OnDeleteItem
        } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={style.image} src={product.img} />
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
                        onClick={() => increaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        onClick={() => decreaseQuantity(product)}
                    />

                    <img
                        alt="remove"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                        onClick={() => OnDeleteItem(product.id)}
                    />
                </div>
            </div>

        </div>
    )
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