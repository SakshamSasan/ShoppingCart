import React from 'react'
import List from './List.js'
import './App.css';
import Navbar from './Navbar'
import Checkout from './Checkout'
import mac from './pics/Mac.png'
import chanel from './pics/chanel.jpg'
import jacket from './pics/greendenim.jpg'
import book from './pics/jbp.jpg'

class App extends React.Component {

  constructor () {
    super();
    this.state={
      products:[

        {
          title:'MacBook Pro (2021), M1 Max chip',
          quantity:1,
          seller:'Apple',
          price:1800,
          img: {
            backgroundImage:`url(${mac})`
          },
          id:1
        },

        {
          title:'Bleu de Chanel EDT',
          quantity:2,
          seller:'Chanel',
          price:140,
          img: {
            backgroundImage:`url(${chanel})`
          },
          id:2
        },

        {
          title:'Green Denim Jacket',
          quantity:1,
          seller:'Abercrombie & Fitch',
          price:90,
          img: {
            backgroundImage:`url(${jacket})`
          },
          id:3
        },
        {
          title:'12 Rules for Life',
          quantity:1,
          seller:'Jordan Peterson',
          price:21,
          img: {
            backgroundImage:`url(${book})`
          },
          id:4
        }


      ]
    }
  }


  increaseQuantity=(product) =>{
    let itemInArrayIndex = this.state.products.indexOf(product)
    this.state.products[itemInArrayIndex].quantity+=1
    var foo = this.state.products.map((elem)=>elem)

    this.setState({
      products:foo
    })
  }

  decreaseQuantity=(product) =>{
    if(product.quantity<=0) {
      return;
    }
    let itemInArrayIndex = this.state.products.indexOf(product)
    this.state.products[itemInArrayIndex].quantity-=1
    var foo = this.state.products.map((elem)=>elem)

    this.setState({
      products:foo
    })
  }

  deleteProduct=(product) => {
    let id = product.id;
    let foo =  this.state.products.filter((item)=>item.id!==id)
    this.setState({
      products:foo
    })

  }

  getnumber() {
    let count = 0;
    this.state.products.forEach((item)=>{
      count+=item.quantity
    })
    return count;
  }

  total() {
    let price = 0
    this.state.products.forEach((item)=>{
      price+=(item.quantity*item.price)
    })
    return price;
  }

  render() {

    return (
      <div className="App">

      <Navbar qty={this.getnumber()}/>

        <div className="container">


          <div className="row align-items-start">

            <div className=" my-5 col-lg-7 rounded bg-white">
              <h3 className="p-2 border-bottom border-gray">My Cart</h3>

              {this.state.products.length?<List info={this.state.products} increaseEvent={this.increaseQuantity} decreaseEvent={this.decreaseQuantity} deleteEvent={this.deleteProduct}/>:<p style={{color:'grey'}}><i>The cart is empty</i></p>}

            </div>
            <div className="d-inline my-5 col-lg-4 p-3 offset-lg-1 bg-white rounded">

              <Checkout total={this.total()}/>
               
            </div>
          </div>

        </div>
      </div>
    );
  }
  
}

export default App;
