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
    this.db = firebase.firestore();
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
    this.db
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

    const docRef = this.db.collection('products').doc(product.id);
    docRef
      .update({
        qty: product.qty + 1
      })
      .then(() => {
        console.log("the product has been updated");
      })
      .catch((error) => {
        console.log('error in updating the product', error);
      })
  }
  handlerDeleteItem = (id) => {
    const { products } = this.state;
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('the product is successfully deleted');
      })
      .catch((error) => {
        console.log('error in deleting the product', error);
      })
  }
  handlerDecreaseQuantity = (product) => {
    const { products } = this.state;
    const docRef = this.db.collection('products').doc(product.id);
    if (products.qty == 0) {
      return;
    }
    docRef
      .update({
        qty: product.qty - 1
      })
      .then(() => {
        console.log('the qty is decreased');
      })
      .catch((error) => {
        console.log('error in decreasing the qty', error);
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
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        title: 'washing machine',
        price: 12000,
        qty: 6,
        img: ''
      })
      .then((docRef) => {
        console.log("product has been added", docRef);
      }).catch((error) => {
        console.log('error in creating the product', error);
      });
  }
  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add Product</button>
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
