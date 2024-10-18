import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllArtsCraftsCard from '../Components/AllArtsCraftsCard';

const SubCategoryList = () => {
    const subCategoriesLists = useLoaderData()

    console.log(subCategoriesLists);
    return (
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 m-10">
          {subCategoriesLists.map((subCategoriesList) => (
            <AllArtsCraftsCard
              key={subCategoriesList._id}
              artAndCraft={subCategoriesList}
            ></AllArtsCraftsCard>
          ))}
        </div>
      </div>
    );
};

export default SubCategoryList;