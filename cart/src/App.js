import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
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
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.map((product) => {
      count += product.qty;
    });
    return count;
  }
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handlerIncreaseQuantity}
          decreaseQuantity={this.handlerDecreaseQuantity}
          OnDeleteItem={this.handlerDeleteItem}

        />
      </div>
    );
  }
}

export default App;
