import React from 'react'
import './ProgressBar.css'
const ProgressBar = (props) => {
  return (
      <div>
    <div className='progress-bar'>
        <div style={{backgroundColor:"#fff" , height:props.value}} ></div>
    </div>
     <h3>{props.day}</h3>
     </div>
  )
}

export default ProgressBar