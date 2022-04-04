import { useNavigate ,Link, NavLink } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  const navigate = useNavigate();
  const nav = () =>{
    navigate('/add-purchase-details')
  }
  return (
    <div className='sidebar' >
        <h2>Nothing to Remember</h2>
        <ul>
            <p className='list-title'>Lists</p>
            <li className='list-item'  onClick={()=>navigate('/customer-list')} >Customers</li>
            <li className='list-item' >Products</li>

            <p className='list-title'>Stats</p>
            <li className='list-item' >Earnings</li>
            <li className='list-item' >Items</li>

            <p className='list-title'>Services</p>
            <li className='list-item' onClick={()=>navigate('/edit-products')} >Edit Products</li>
            <li className='list-item' onClick={()=>navigate('/add-purchase-details')} >Add Purchase Details</li>

            <p className='list-title'>User</p>
            <li className='list-item' >Profile</li>
            <button className='logout-btn'>Logout</button>
           <NavLink activeCLassname = 'active' to="/merchant-dashboard"  >merchant-dashboardv</NavLink>
        </ul>
    </div>
  )
}

export default Sidebar