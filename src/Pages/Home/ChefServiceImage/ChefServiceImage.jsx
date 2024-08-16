import React from "react";
import img from "../../../assets/home/chef-service.jpg";

const ChefServiceImage = () => {
  return (
    <div className="relative mt-20 mb-32">
      <img src={img} alt="Chef Service" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-5">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
          <h3 className="text-lg">
            At our restaurant, our chefs are dedicated to creating an exceptional
            dining experience with every dish they prepare. Whether you're
            savoring a comforting bowl of soup, indulging in a perfectly baked
            pizza, enjoying a fresh and vibrant salad, or treating yourself to a
            delicious dessert, each meal is crafted with passion, precision, and
            the finest ingredients. Our chefs ensure that every bite is a
            testament to their culinary expertise, making your visit truly
            memorable.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ChefServiceImage;
