import React from "react";
import FoodCart from "../../../components/FoodCart/FoodCart";
const OrderTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {items.map((item) => (
        <FoodCart key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
