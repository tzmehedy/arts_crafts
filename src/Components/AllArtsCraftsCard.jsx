import React from 'react';
import { Link } from 'react-router-dom';

const AllArtsCraftsCard = ({ artAndCraft }) => {

    const {name,
         _id,
          subCategory,
          description,
          price,
          rating,
          customization,
          processingTime,
          stockStatus,
          photoUrl} = artAndCraft
  return (
    <div>
      <div className=" bg-base-200 max-w-96 shadow-xl mt-5 rounded-2xl p-5">
        <figure>
          <img className="w-full h-64 rounded-2xl" src={photoUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Sub-Category: {subCategory}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`} className="btn btn-secondary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtsCraftsCard;