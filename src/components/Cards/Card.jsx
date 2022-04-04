import Reacpropst from 'react'
// import image from './add-purchase.svg'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="card" />
        <h2>{props.title}</h2>
    </div>
  )
}

export default Card