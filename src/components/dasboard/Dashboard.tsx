import React from 'react';
import ProductsManager from "./ProductsManager";
import OrdersManager from "./OrdersManager";

const Dashboard : React.FC = () => {
  return (
    <div className="Dashboard">
        <h1>DASHBOARD</h1>
        <ProductsManager/>
        <OrdersManager/>
    </div>
  );
}

export default Dashboard;