import React from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashCan } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";

const ManageItems = () => {
  const [menu] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  //   created handle delete item function
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been removed`,
            icon: "success",
          });
        }
      }
    });
  };

  const handleUpdateItem = (item) => {}; //TODO: implement handleUpdateItem [watch video 69:8]

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTittle heading="Manage All Items" subHeading="Hurry up" />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdateItem()}
                    className="btn btn-ghost bg-orange-500 text-xl text-white "
                  >
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
