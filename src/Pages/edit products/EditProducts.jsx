import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import data from '../../components/data/Data'
import EditProduct from '../../components/products/EditProduct'
import './EditProducts.css'
const EditProducts = () => {

  const cat = ["Speakers","Repair","Boards","Amplifiers","Lights","Wires","General"]

  return (
    <div className='edit-products' >
   
            <h1>Edit Products</h1>
            <div className='edit-product-container'>
            {data.map((card) => <EditProduct key={card.id} id={card.id} name={card.name} cost={card.cost} no={card.items} photo={card.photo} edit={"edit"} delete={"delete"} />)}
            </div>
      
    </div>
  )
}

export default EditProducts