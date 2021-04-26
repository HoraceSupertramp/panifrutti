import React from 'react';
import OrdersManager from "./OrdersManager";

const Dashboard : React.FC = () => {
  return (
    <div className="Dashboard">
        <h1>DASHBOARD</h1>
        <OrdersManager/>
    </div>
  );
}

export default Dashboard;