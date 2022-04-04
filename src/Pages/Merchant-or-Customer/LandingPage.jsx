import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const navigate = useNavigate()
    const onClickBtn = () =>{
        navigate('/login')
    }
  return (
    <div className='register-page-container'>
    <div className='register-left-container'>
        <div>
       <h1>Login as Merchant</h1>
       <button className='landing-page-btn' onClick={onClickBtn} style={{color:"#2187EC"}}>Login</button>
       </div>
    </div>
    <div className='register-right-container'>
        <div>
    <h1>Login as Customer</h1>
       <button className='landing-page-btn' onClick={onClickBtn} style={{color:"#fff" , backgroundColor:"#2187EC"}}>Login</button>
    </div>
    </div>
</div>
  )
}

export default LandingPage