import React from 'react'


var styles = {
    
    text:{
      color:'green'
    },
    sellername:{
      color:'grey',
      fontWeight:'bolder'
    }
  }

class CartItem extends React.Component{

  //Using local state and props here

  // constructor(props) {
  //   super(props)
  //   this.state={
  //     quantity:this.props.info.quantity
      
  //   }
  //   console.log(this.state)


  // }


  //setState direct method of passing shallow merge object
  
  // increase() {

  //   this.setState({
  //     quantity:this.props.quantity+1
  //   },)

  // }

  // //setState prevState method of passing callback to use it if needed

  // decrease() {

  //   this.setState((prevState)=>{
  //     if(prevState.quantity<=0) {
  //       return {
  //         quantity:0
  //       }
  //     }
  //     return {
  //       quantity:prevState.quantity-1
  //     }
  //   })
  //   console.log(this.state.quantity)

  // }

  render() {
    var {title,price,quantity,seller,img} = this.props.info;
    return (
      <div className = "row w-100 py-1 border-bottom border-gray"> 

        <div className = "col-12 p-2" >

          <div className="row">
            <div className="col-4 py-2" >
              <div style={img} className="ht cover" ></div>
            </div>
            <div className="col-8">

              <span><b>{title}</b></span>
              <br />
              <span style={styles.sellername}>{seller}</span>
              <br />
              <span style={styles.text}>In Stock</span>
              <br />
              <br />
              <h3 >${price}</h3>
              <br/>
              <span className="margin-right">Qty: <span data-cy={`qty-${title}`}>{quantity}</span></span>
              <span onClick={this.props.increaseEvent.bind(null,this.props.info)} className="action" data-cy={`increase-${title}`}><i className="fa-solid fa-plus"></i></span>
              <span onClick={this.props.decreaseEvent.bind(null,this.props.info)} className="mx-2 action" data-cy={`decrease-${title}`}><i className="fa-solid fa-minus"></i></span>
              <span onClick={this.props.deleteEvent.bind(null,this.props.info)} className="ml-2 action-del" data-cy={`delete-${title}`}><i className="fa-solid fa-trash-can"></i></span>


            </div>
          </div>
          

        </div>


    </div>);


  }



}
export default CartItem;