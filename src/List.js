import React from 'react'
import CartItem from './CartItem.js'

function List(props) {

    
  return (

    <div className="p-2">
      {props.info.map((elem)=>{
        return <CartItem info={elem} key={elem.id} increaseEvent={props.increaseEvent} decreaseEvent={props.decreaseEvent} deleteEvent={props.deleteEvent}/>
      })}
    </div>

  )

  





}

export default List