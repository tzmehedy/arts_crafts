import React from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddCraft = () => {

    const handelAddCrafts = (e) =>{
        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const subCategory = form.subCategoryName.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value
        const photoUrl = form.photoUrl.value

        const craftInfo = {
            name, subCategory, description, price, rating, customization, processingTime, stockStatus, photoUrl
        }
        console.log(craftInfo)

        fetch("http://localhost:5000/addCraft", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(craftInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                form.reset()
                toast("Successfully added")
            }
        })
    }



    return (
      <div className="bg-gray-100 p-10 m-2 md:m-20">
        <h1 className="text-center font-bold text-2xl">Add Your craft items</h1>

        <form onSubmit={handelAddCrafts}>
          <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-10 font-bold mt-10">
            <div className="md:w-1/2">
              <p>Name</p>
              <input
                className="w-full border-2 px-3 py-2 border-gray-400"
                type="text"
                placeholder="Name"
                name="name"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <p>Sub-Category Name</p>
              <input
                className="w-full border-2 px-3 py-2 border-gray-400"
                type="text"
                placeholder="Sub-Category Name"
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
                placeholder="Description"
                name="description"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <p>Price</p>
              <input
                className="w-full border-2 px-3 py-2 border-gray-400"
                type="text"
                placeholder="Price"
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
                placeholder="Rating"
                name="rating"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <p>Customization</p>
              <input
                className="w-full border-2 px-3 py-2 border-gray-400"
                type="text"
                placeholder="Customization"
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
                placeholder="Processing Time"
                name="processingTime"
                id=""
              />
            </div>
            <div className="md:w-1/2">
              <p>Stock Status</p>
              <input
                className="w-full border-2 px-3 py-2 border-gray-400"
                type="text"
                placeholder="Stock Status"
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
                placeholder="Photo URL"
                name="photoUrl"
                id=""
              />
            </div>
          </div>
          <div className="mt-5">
            <button className='btn btn-secondary w-full font-bold text-black'>Add Craft Item</button>
          </div>
        </form>
      </div>
    );
};

export default AddCraft;
