// import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginForm from './components/Login/LoginForm';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import LandingPage from './Pages/Merchant-or-Customer/LandingPage';
import ProgressBar from './components/ProgressBar';
import Expense from './components/Expense';
import Navbar from './components/Navbar/Navbar';
import MerchantDashboard from './Pages/Merchant-Dashboard/MerchantDashboard';
import Product from './components/products/Product';
import AddPurchaseDetails from './Pages/Add-Purchase-Details/AddPurchaseDetails';
import CheckOut from './Pages/check out/CheckOut';
import EditProducts from './Pages/edit products/EditProducts';
import CustomerList from './Pages/lists/CustomerList';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/home/Home';
function App() {
  return (
    <div className='app'>

 
    <Router>
       <Navbar/>
       {/* <div className='sidebar' >
         <Sidebar/>   
       </div> */}
      <div className='componenets'>

    
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/merchant-dashboard' element={<MerchantDashboard/>}/>
        <Route path='/add-purchase-details' element={<AddPurchaseDetails/>}/>
        <Route path='/check-out' element={<CheckOut/>} />
        <Route path='/edit-products' element={<EditProducts/>}/>
        <Route path='/stats' element={<h1>Stats</h1>}/>
        <Route path='/customer-list' element={<CustomerList/>}/>
      </Routes>
      </div>
    </Router>
    </div>
 
  );
}

export default App;
