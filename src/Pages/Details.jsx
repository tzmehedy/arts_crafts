import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detailsData = useLoaderData()
    return (
      <div className="flex justify-center items-center my-32">
        <div className="card lg:card-side bg-base-100 shadow-2xl p-16">
          <figure className="w-1/2">
            <img className="w-full " src={detailsData.photoUrl} />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">{detailsData.name}</h2>
            <p>{detailsData.subCategory}</p>
            <p className="text-justify">{detailsData.description}</p>
            <div className="flex justify-center items-center font-bold">
              <p>Price: ${detailsData.price}</p>
              <p>Rating: {detailsData.rating}</p>
              {detailsData.customization === "yes" ? (
                <p>In stock</p>
              ) : (
                <p>Out Of Stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;