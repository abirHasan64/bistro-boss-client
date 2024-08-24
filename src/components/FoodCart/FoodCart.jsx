import React from "react";

function componentName({ item }) {
  const { name, image, price, recipe } = item;
  console.log(item)
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 rounded px-4 bg-slate-900 text-white w-1/6">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-100  border-orange-400 border-0 border-b-4 mt-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default componentName;
