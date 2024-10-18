import React from 'react';
import { Link } from 'react-router-dom';

const ArtAndCategorySectionCard = ({ subCategory }) => {
    const { subcategory_name , image} = subCategory;
  return (
    <Link to={`/subcategory/${subcategory_name}`}>
      <div className="bg-gray-300 rounded-lg image-full w-64 md:w-96 shadow-xl p-5">
        <figure>
          <img className="w-full max-h-48 rounded-lg" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{subcategory_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ArtAndCategorySectionCard;
