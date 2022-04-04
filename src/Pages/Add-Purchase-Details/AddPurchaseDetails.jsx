import React, { useEffect, useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import Product from "../../components/products/Product";
import Sidebar from "../../components/sidebar/Sidebar";
import "./AddPurchaseDetails.css";
import  arr from '../../components/data/Data'
import speaker from './speaker.jpg'
const AddPurchaseDetails = () => {
  // const d = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  const navigate = useNavigate();
  const location = useLocation();
  const val = location.state;
  
  const[total,setTotal] = useState(val===null?0:val[1]);
  const fetch = ()=>{
    setProductData(productData)
  }

  const[data,setData] = useState([])
  const[productData,setProductData]=useState(arr)

    useEffect(()=>{
    if(val!==null)
    {
      console.log( " props " ,val[0])
      console.log("before find products  ",productData)
      val[0].map((item) =>{
        const _id= item.id
        const c = item.count
        productData.find(v => v.id = _id).items = c
      })

      // val[0].map((item)=> data.find(v => v.id==item.id).items=item.count)
       // setData([data])
       console.log("products  ",productData)
       fetch()
    }
  },[])


  const CheckOutHandler =()=>{
    const newstate = [data,total]
      navigate('/check-out',{state:newstate})
  }


  const add = (id,cost)=>{
      const newobj = {
        id:id,
        count:1,
        image:productData.find(v=> v.id===id).photo
      }
      var index = data.findIndex(x => x.id===id)
      if(index!==-1)
      { 
        var c = data[index].count+1
         data.find(v=> v.id===id).count=c
          setData(data)
      }
      else{
        setData([...data,newobj])
      }
      console.log('add data',data)
      setTotal(total+cost)
  }
  const sub = (id,cost)=>{
    var index = data.findIndex(x => x.id===id)
    var c = data[index].count;
    if(c===1)
    {
      data.splice(index,1)
    }
    else{
      data.find(v => v.id===id).count=c-1;
    }
    setData(data)
    setTotal(total-cost)
    console.log('delete data',data)
  }


  return (
    <div className="add-purchase">
       <div className="check-out">
          <p>total amount :  {total} Rs</p>
          <button onClick={CheckOutHandler}>Check out</button>
       </div>      
    

      <div className="products-grid">
        {productData.map((card) => (
          <Product key={card.id} id={card.id} name={card.name} cost={card.cost} no={card.items} photo={card.photo} add={add} sub={sub}/>
        ))}
      </div>
      </div> 
  );
};

export default AddPurchaseDetails;
