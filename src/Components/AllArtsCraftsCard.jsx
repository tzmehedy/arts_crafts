import React from 'react';

const AllArtsCraftsCard = ({ artAndCraft }) => {

    const {name,
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
      <div className=" bg-base-300 max-w-96 shadow-xl mt-5 rounded-2xl p-5">
        <figure>
          <img className='w-full h-64 rounded-2xl' src={photoUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Sub-Category: {subCategory}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtsCraftsCard;