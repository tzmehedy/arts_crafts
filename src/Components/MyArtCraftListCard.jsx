import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const MyArtCraftListCard = ({
  artCraftList,
  artCraftLists,
  setArtCraftLists,
}) => {
  const {
    _id,
    name,
    subCategory,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    photoUrl,
  } = artCraftList;

  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myArtCraftListDelete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remainingArtCraftLists = artCraftLists.filter(
                artCraftList => artCraftList._id !== _id
              );
              console.log(remainingArtCraftLists)
              setArtCraftLists(remainingArtCraftLists);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className=" bg-base-300 max-w-96 shadow-xl mt-5 rounded-2xl p-5">
        <figure>
          <img className="h-48 w-full rounded-2xl" src={photoUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Stock Status: {stockStatus}</p>
          <div className="card-actions justify-end gap-5">
            <Link to={`/update/${_id}`}>
              <button className="">
                {" "}
                <CiEdit />
              </button>
            </Link>
            <button onClick={handelDelete} className="">
              {" "}
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftListCard;