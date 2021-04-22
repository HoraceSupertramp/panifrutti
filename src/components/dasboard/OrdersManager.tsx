import React from 'react';

const OrdersManager : React.FC = () => {
  return (
   <div className="OrdersManager">
       <h2>Manage Orders</h2>
       <div className="OrdersList">
           <h3>Completed orders: </h3>
       </div>
       <div className="OrdersList">
           <h3>Pending Orders</h3>
       </div>

   </div>
  );
}

export default OrdersManager;