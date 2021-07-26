import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }
  componentDidMount() {

    //without listen data is updated when we refresh 
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })
    //     this.setState({
    //       products: products,
    //       loading: false
    //     })
    //   })

    //with listen so that data update automatically
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products: products,
          loading: false
        })
      })
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
    });
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
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handlerIncreaseQuantity}
          decreaseQuantity={this.handlerDecreaseQuantity}
          OnDeleteItem={this.handlerDeleteItem}

        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ fontSize: 25, Padding: 10 }}>
          Total: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
