import React from 'react';
import CartItem from './CartItem';
const Cart = (props) => {

    const { products } = props;
    console.log(props);
    return (
        <div className="cart">
            {products.map((product) => {

                return (


                    <CartItem
                        product={product}
                        key={product.id}
                        increaseQuantity={props.increaseQuantity}
                        decreaseQuantity={props.decreaseQuantity}
                        OnDeleteItem={props.OnDeleteItem}
                    />
                )
            })}

        </div>
        // <div>
        //     <CartItem/>
        // </div>
    );


}

export default Cart;