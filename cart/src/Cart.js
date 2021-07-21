import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {

                    qty: 1,
                    price: 99,
                    title: 'watch',
                    img: '',
                    id: 1
                },
                {
                    qty: 4,
                    price: 444,
                    title: 'mobile',
                    img: '',
                    id: 2
                },
                {
                    qty: 10,
                    price: 4444,
                    title: 'laptop',
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handlerIncreaseQuantity = (product) => {
        // console.log('Hey! increase the quantity of this product', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        })

    }
    handlerDeleteItem = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }
    handlerDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty == 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {

                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            increaseQuantity={this.handlerIncreaseQuantity}
                            decreaseQuantity={this.handlerDecreaseQuantity}
                            OnDeleteItem={this.handlerDeleteItem}
                        />
                    )
                })}

            </div>
            // <div>
            //     <CartItem/>
            // </div>
        );
    }


}

export default Cart;