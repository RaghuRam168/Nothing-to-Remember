import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./CheckOut.css";
const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const data = location.state;
  return (
    <div className="check-out">
      <div className="left-container">
        <Sidebar />
      </div>

      <div className="right-container">
        <h1>CheckOut</h1>
        {data[0].map((product) => (
          <div className="checkout-product">
            <img
              src={product.image}
              alt="product"
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <p>{product.id}</p>
            <p>{product.count}</p>
            <div className="pending-paid">
                <button>Pending</button>
                <button>Paid</button>
            </div>
          </div>
        ))}
        <button
          onClick={() => navigate("/add-purchase-details", { state: data })}
        >
          Add or Remove
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
