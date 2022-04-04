import React, { useState } from 'react'
import './Product.css'
import speaker from './speaker.jpg'
const Product = (props) => {
    const[num,setNum] = useState(props.no)
    const onClickHandler = (event)=>{
        var c = event.target.name;
        if(c==='-' && num!=0)
        {
            setNum(num-1);
            props.sub(props.id,props.cost)
        }
        if(c==='+')
        {
            setNum(num+1)
            props.add(props.id,props.cost)
        }
    }

  return (
    <div className='product'>
        <img src={props.photo} alt="product" />
        <p className='product-name'>{props.name}</p>
        <p className='cost' >Cost : {props.cost} Rs</p>
        <div className='btn'>
            <button style={{backgroundColor:"red"}} name="-" onClick={onClickHandler}>-</button>
            <p>{num}</p>
            <button style={{backgroundColor:"#06FF00"}} name="+" onClick={onClickHandler}>+</button>
        </div>
     </div>
  )
}

export default Product