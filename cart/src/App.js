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
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
          id: 1
        },
        {
          qty: 4,
          price: 444,
          title: 'mobile',
          img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
          id: 2
        },
        {
          qty: 10,
          price: 4444,
          title: 'laptop',
          img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80',
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
  getTotal = () => {
    const { products } = this.state;
    let TotalPrice = 0;

    products.map((product) => {
      TotalPrice = TotalPrice + (product.qty * product.price)
    });

    return TotalPrice;
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
        <div style={{ fontSize: 25, Padding: 10 }}>
          Total: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
