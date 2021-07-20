import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render() {
        return (

            <div>
                CART
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            // <div>
            //     <CartItem/>
            // </div>
        );
    }


}

export default Cart;