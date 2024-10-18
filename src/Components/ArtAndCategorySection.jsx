import React, { useEffect, useState } from "react";
import ArtAndCategorySectionCard from "./ArtAndCategorySectionCard";

const ArtAndCategorySection = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subCategory")
      .then((res) => res.json())
      .then((data) => {
        setSubCategories(data);
      });
  }, []);

  console.log(subCategories);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black text-center mt-20">
        Art & Category Section
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-5">
        {subCategories.map((subCategory) => (
          <ArtAndCategorySectionCard
            key={subCategory._id}
            subCategory={subCategory}
          ></ArtAndCategorySectionCard>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCategorySection;
