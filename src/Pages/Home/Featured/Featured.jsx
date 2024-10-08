import React from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import featureImage from "../../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed py-16">
      <h2 className="text-white">
        <SectionTittle subHeading="Check it out" heading="Featured Item" />
      </h2>
      <div className="md:flex justify-center items-center py-20 px-36">
        <div>
          <img className="rounded-md" src={featureImage} alt="Featured Item" />
        </div>
        <div className="md:ml-10 text-white">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can I get some</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus aut obcaecati magni quae numquam ipsa eligendi atque
            nihil ut quos consequatur sint et culpa iste voluptatum, repellendus
            cupiditate quidem sapiente quia molestiae. Est ducimus explicabo,
            distinctio doloremque fuga quis deleniti molestias molestiae
            voluptas. Odio expedita placeat voluptatem suscipit, repellendus
            obcaecati magni incidunt aliquam autem perspiciatis rerum. Qui est
            molestias voluptatibus distinctio odit, ex ratione corporis nostrum
            incidunt veniam modi nisi magnam saepe, quidem autem quam sapiente.
            Omnis quis tempore unde?.
          </p>
          <Link to="/orderfood/salad">
            <button className="btn btn-outline border-0 text-white border-b-2 mt-4 text-xl">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
