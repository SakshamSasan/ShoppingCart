import React from 'react'


function Checkout(props) {

  var final = (props.total)+(props.total*0.13);
    
  return (

    < >
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div className="title"><h2>Price: </h2></div>
        <div className="title"><h4>$ {props.total}</h4></div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div className="title"><h2>Shipping: </h2></div>
        <div className="title"><h4 style={{color:'green'}}><i>Free</i></h4></div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-between border-bottom border-gray">
        <div className="title"><h2>Tax: </h2></div>
        <div className="title"><h4 >13%</h4></div>
      </div>
      <div className="w-100 my-2 py-2 d-flex justify-content-between align-items-center border-bottom border-gray">
        <div className="title"><h2>Total: </h2></div>
        <div className="title"><h4>$ {final.toFixed(2)}</h4></div>
      </div>
      <br />
      <br />
      <button type="button" className="btn w-100 btn-warning"><h4>Checkout</h4></button>

    </>

  )

  





}

export default Checkout