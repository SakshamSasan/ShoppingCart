import React from 'react'
import List from './List.js'
import './App.css';
import Navbar from './Navbar'
import Checkout from './Checkout'
import db from './index.js'
import {doc,collection,getDocs,onSnapshot,updateDoc,deleteDoc,query,orderBy,addDoc} from 'firebase/firestore'

class App extends React.Component {

  constructor () {
    super();
    this.state={
      products:[
      ],
      loading:true
    }
  }


 increaseQuantity=  async (product) =>{
   
    let newfield = {
      quantity:product.quantity+1
    }
    let docRef = doc(db,"products",product.id)
    //making arrow handler asynchronous and adding updateDoc method to get job done
    //takes document reference and then the key you may want to add/update
    
    try{
      await updateDoc(docRef,newfield);
    }
    catch(error){
      alert('Sorry. Some error has occured:',error)
    }
    

    // let itemInArrayIndex = this.state.products.indexOf(product)
    // let val=this.state.products[itemInArrayIndex].quantity+1
    // var foo = this.state.products.map((elem)=>elem)
    // this.setState({
    //   products:foo
    // })
  }

  decreaseQuantity= async (product) =>{
    if(product.quantity<=0) {
      return;
    }
    let newfield = {
      quantity:product.quantity-1
    }
    let docRef = doc(db,"products",product.id)
    //making arrow handler asynchronous and adding updateDoc method to get job done
    //takes document reference and then the key you may want to add/update
    try{
      await updateDoc(docRef,newfield);
    }
    catch(error){
      alert('Sorry. Some error has occured:',error)
    }
    
    // let itemInArrayIndex = this.state.products.indexOf(product)
    // this.state.products[itemInArrayIndex].quantity-=1
    // var foo = this.state.products.map((elem)=>elem)

    // this.setState({
    //   products:foo
    // })
  }

  deleteProduct=async (product) => {
    let docRef = doc(db,"products",product.id)
    try{
      await deleteDoc(docRef)
    }
    catch(error){
      alert('Sorry. Some error has occured:',error)
    }
    

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

  addToFireBase = async ()=>{

    let collectionRef = collection(db,"products")
    try{
      await addDoc(collectionRef,{
        title:'Nike Air Force 1',
        seller:'Nike',
        img:{
          backgroundImage:"url(https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-older-shoes-1hqfHl.png)"
        },
        quantity:1,
        price:100
      })
    }
    catch(error){
      alert('Sorry. Some error has occured:',error)
    }
    

  }

  componentDidMount() {
    alert("WARNING: Deleting an item will permanently delete it from database. Use cautiously !!");
    //getting the reference for the collection named "products"
    let itemsRef=collection(db,"products")
    //querying by ordering on basis of price
    itemsRef=query(itemsRef,orderBy('price','desc'))
    //attaching eventListener for displaying changes automatically
    //eventListener gets an object with docs property which is required docs array
    try{
        let changes = onSnapshot(itemsRef,(snapshot)=>{
        let foo = snapshot.docs.map((item)=>{let newArr=item.data();
          newArr['id']=item.id;
          return newArr
        })
        this.setState({
          products:foo,
          loading:false
        })
      })
    }
    catch(e) {
      alert('Error occured: ',e);
    }
    
   
    


  }

  render() {

    return (
      <div className="App">

      <Navbar qty={this.getnumber()}/>

        <div className="container">


          <div className="row align-items-start">

            <div className=" my-5 col-lg-7 rounded bg-white py-2">
              <h3 className="p-2 border-bottom border-gray">My Cart</h3>

              {this.state.loading&&<p><i>Loading...</i></p>}
              {this.state.products.length?<List info={this.state.products} increaseEvent={this.increaseQuantity} decreaseEvent={this.decreaseQuantity} deleteEvent={this.deleteProduct}/>:<p style={{color:'grey'}}><i>The cart is empty</i></p>}
              <button onClick={this.addToFireBase} className="btn w-100 btn-warning" type="button"> Add an Item </button>
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
