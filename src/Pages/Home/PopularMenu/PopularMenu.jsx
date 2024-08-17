import React, { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTittle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn btn-outline border-0 border-b-2 text-xl">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
