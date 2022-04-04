import React from "react";
import "./Home.css";
import brain from "./brain.jpg";
import addPurchase from "./add-purchase.svg";
import purchaseData from "./purchase.svg";
import edit from "./edit-stock.svg";
import {AiOutlineHome,AiOutlineAppstore,AiOutlineUsergroupDelete,AiFillFund,AiOutlineBarChart,AiOutlineTeam} from 'react-icons/ai'
import {BiCustomize,BiRupee,BiLogOutCircle} from 'react-icons/bi'

import Expense from "../../components/Expense";
const Home = () => {
  return (
    <div>
      <div className="container-1">
        <div className="left">
          <p>Nothing</p>
          <p style={{ color: "#2fa4ff" }}> to</p>
          <p>Remember</p>
        </div>
        <div className="right">
          <img src={brain} alt="NTR" />
        </div>
      </div>

      <div className="container-2">
        <div className="left">
          <Expense />
        </div>
        <div className="right">
          <p className="light">weekly</p>
          <p className="title">Analytics</p>
          <p className="light">
          <span style={{ color: "#2fa4ff" }}> Merchant </span> can view his weeklyactivity
          </p>
          <br></br>
          <p className="light">
          <span style={{ color: "#2fa4ff" }}>Customer </span> can view his Expenses.
          </p>
        </div>
      </div>

      <div className="container-3">
          <div className="left">
                <p className="title"><span style={{ color: "#2fa4ff"}}>Add </span></p> 
                <p className="title" > Purchase Details</p>
                <p className="light" >Merchant can add the purchase details by clicking <BiRupee style={{color:"#2fa4ff"}}/>  . This contains product ids' and number of units purchased .</p>
          </div>
            <div className="right">
                <img src={addPurchase} alt="Add Purchase Details" />
            </div>
      </div>

      <div className="container-2" >
      <div className="left">
            <img src={purchaseData} alt="purchase data" />
      </div>
      <div className="right" >
          <p className="title" ><span style={{ color: "#2fa4ff"}}>Customer </span>details</p>
          <p className="light">Merchant can access the list of purchase details by clicking<span style={{ color: "#2fa4ff"}}> <AiOutlineUsergroupDelete/></span> . </p>
      </div>
      </div>


      <div className="container-3" >
            <div className="left">
                <p className="title" ><span style={{ color: "#2fa4ff"}}>Edit </span>Products</p>
                <p className="light">Merchant can edit the product details by clicking<span style={{ color: "#2fa4ff"}}> <BiCustomize/></span> .Updating or Deleting the products</p>
            </div>
            <div className="right" >
            <img src={edit} alt="Edit" />
            </div>
      </div>
    </div>
  );
};

export default Home;
