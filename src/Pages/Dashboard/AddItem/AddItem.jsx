import React from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_Image_Upload_Token; // setting imgbb api token
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure(); // useAxios to secure this route
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // creating form using react hook form
  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`; // set img URL
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // get the image

    // fetch the img URL
    fetch(imgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      // getting the imageURL
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);

          // using axiosSecure to ensure route security and posting newItem
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting  item:-", data.data);
            if (data.data.insertedId) {
              reset(); // reset form after successful submission
              Swal.fire({
                title: "Success!",
                text: "You have successfully added a new item!",
                icon: "success",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>',
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-12">
      <SectionTittle subHeading="What's New" heading="Add An Item" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </label>

        <div className="flex space-x-8 my-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              defaultValue="Select one"
            >
              <option disabled>Select one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Detail*</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Detail"
          ></textarea>
        </label>

        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text">Item image</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input max-w-xs border-gray-500"
          />
        </label>

        <input
          className="btn btn-primary mt-4"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
