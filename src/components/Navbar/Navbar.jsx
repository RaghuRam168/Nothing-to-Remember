import React, { useState } from 'react'
import {AiOutlineHome,AiOutlineAppstore,AiOutlineUsergroupDelete,AiFillFund,AiOutlineBarChart,AiOutlineTeam} from 'react-icons/ai'
import {BiCustomize,BiRupee,BiLogOutCircle} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const[toggle,setToggle] = useState(false)
  const data = [
    {
      logo:AiOutlineAppstore,
      path:'/home',
      hover:'Home'
    },
    {
      logo:AiOutlineHome,
      path:'/merchant-dashboard',
      hover:'Dashboard'
    },
    {
      logo:AiOutlineUsergroupDelete,
      path:'/customer-list',
      hover:'customers'
    },
    {
      logo:AiOutlineBarChart,
      path:'/stats',
      hover:'Statastics'
    },
    {
      logo:BiRupee,
      path:'/add-purchase-details',
      hover:'Add purchase'
    },
    {
      logo:BiCustomize,
      path:'/edit-products',
      hover:'Edit Products'
    },
    {
      logo:BiLogOutCircle,
      path:'/',
      hover:'Logout'
    }
  ]


  return (
    <div className='navbar' >
        {data.map((link)=>
         
        
       <div className='hover' >
        <NavLink to={link.path} className='nav-icons' >
            {link.logo}
        </NavLink>
        <p className='text' >{link.hover}</p>
     </div>
        )}
    </div>
  )
}

export default Navbar