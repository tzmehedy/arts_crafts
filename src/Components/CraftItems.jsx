import React, { useState } from 'react';
import AllArtsCraftsCard from './AllArtsCraftsCard';

const CraftItems = () => {
    const [allArtsAndCrafts, setAllArtsAndCrafts] = useState([])

    fetch("http://localhost:5000/allArtsCrafts")
    .then(res=>res.json())
    .then(data=> setAllArtsAndCrafts(data))
    
    

    return (
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">Craft Item</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 m-10">
          {allArtsAndCrafts.map((allArtsAndCraft) => (
            <AllArtsCraftsCard
              key={allArtsAndCraft._id}
              artAndCraft={allArtsAndCraft}
            ></AllArtsCraftsCard>
          ))}
        </div>
      </div>
    );
};

export default CraftItems;