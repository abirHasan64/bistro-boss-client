import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefServiceImage from "./ChefServiceImage/ChefServiceImage";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import PopularMenu from "./PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
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
