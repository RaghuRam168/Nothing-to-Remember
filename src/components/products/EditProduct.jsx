import React, { useState } from 'react'
import './EditProduct.css'
import speaker from './speaker.jpg'
const EditProduct = (props) => {
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
            <button style={{backgroundColor:"red"}} name="Delete" onClick={onClickHandler}>Delete</button>
            <button style={{backgroundColor:"#06FF00"}} name="Edit" onClick={onClickHandler}>Edit</button>
        </div>
     </div>
  )
}

export default EditProduct