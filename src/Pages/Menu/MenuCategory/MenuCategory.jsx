import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pb-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-12 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/orderfood/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Your Favourite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
