import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const artAndCraftData = useLoaderData()



    const handelUpdateCrafts = ()=>{

    }
    return (
      <div>
        <div className="bg-gray-100 p-10 m-2 md:m-20">
          <h1 className="text-center font-bold text-2xl">
            Update Your craft items
          </h1>

          <form onSubmit={handelUpdateCrafts}>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold mt-10">
              <div className="md:w-1/2">
                <p>Name</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.name}
                  name="name"
                  id=""
                />
              </div>
              <div className="md:w-1/2">
                <p>Sub-Category Name</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.subCategory}
                  name="subCategoryName"
                  id=""
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold">
              <div className="md:w-1/2">
                <p>Description</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.description}
                  name="description"
                  id=""
                />
              </div>
              <div className="md:w-1/2">
                <p>Price</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.price}
                  name="price"
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold">
              <div className="md:w-1/2">
                <p>Rating</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.rating}
                  name="rating"
                  id=""
                />
              </div>
              <div className="md:w-1/2">
                <p>Customization</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.customization}
                  name="customization"
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold">
              <div className="md:w-1/2">
                <p>Processing Time</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.processingTime}
                  name="processingTime"
                  id=""
                />
              </div>
              <div className="md:w-1/2">
                <p>Stock Status</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.stockStatus}
                  name="stockStatus"
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold">
              <div className="md:w-full">
                <p>Photo URL</p>
                <input
                  className="w-full border-2 px-3 py-2 border-gray-400"
                  type="text"
                  defaultValue={artAndCraftData.photoUrl}
                  name="photoUrl"
                  id=""
                />
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-secondary w-full font-bold text-black">
                Update Craft Items
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Update;