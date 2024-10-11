import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyArtCraftListCard from '../Components/MyArtCraftListCard';


const MyArtCraftList = () => {
    const [ artCraftLists, setArtCraftLists ] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(user.email);

        const url = `http://localhost:5000/myArtCraftList/${user.email}`;
      
        useEffect(()=>{
            fetch(url)
              .then((res) => res.json())
              .then((data) => setArtCraftLists(data));
        },[user])
        console.log(artCraftLists);

    return (
      <div>
        <h1 className="text-center mt-10 text-2xl font-bold">
          Your Arts & Crafts List
        </h1>

        <div className='m-10 grid grid-cols-1 md:grid-cols-3'>
          {artCraftLists.map((artCraftList) => (
            <MyArtCraftListCard
              key={artCraftList._id}
              artCraftList={artCraftList}
            ></MyArtCraftListCard>
          ))}
        </div>
      </div>
    );
};

export default MyArtCraftList;