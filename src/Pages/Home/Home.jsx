import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefServiceImage from "./ChefServiceImage/ChefServiceImage";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefServiceImage />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
