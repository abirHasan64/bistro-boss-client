import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefServiceImage from "./ChefServiceImage/ChefServiceImage";
import PopularMenu from "./PopularMenu/POpularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefServiceImage />
      <PopularMenu />
    </div>
  );
};

export default Home;
