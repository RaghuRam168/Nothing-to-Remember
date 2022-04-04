import React from "react";
import "./MerchantDashboard.css";
import Card from "../../components/Cards/Card";
import Expense from "../../components/Expense";
import addPurchase from "./add-purchase.svg";
import purchaseData from "./purchase.svg";
import edit from "./edit-stock.svg";
import Sidebar from "../../components/sidebar/Sidebar";
import TotalRevenue from "../../components/widgets/TotalRevenue";
const MerchantDashboard = () => {
  return (
    <div className="merchant-dashboard">
      {/* <div className="left-container">
        <Sidebar/>
      </div> */}
      <div className="right-container">

        <div className="widget-container">
          <TotalRevenue/>
          <Expense />
        </div>
       
        <div className="card-container">
          <Card img={addPurchase} title="Add Purchase Details" />
          <Card img={purchaseData} title="View Purchase details" />
          <Card img={edit} title="Edit Stock" />
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
