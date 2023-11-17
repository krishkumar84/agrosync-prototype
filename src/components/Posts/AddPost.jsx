import React from 'react';

function AddPost() {
  return (
    <div className="flex px-4 sm:px-12 pt-24 justify-center">
      <div className="container max-w-screen-xl px-8 py-12">
        <h1 className="mb-8 text-gray-800  text-2xl font-medium">Add New Crop</h1>
        <div className="flex flex-wrap justify-between gap-24 sections">
          <div className="info flex-1 flex flex-col gap-3 justify-between">
            <label className="text-lg  text-gray-600" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. name of my crop"
              className="p-4 border-2 border-gray-300 rounded-md"
            />

            <label className="text-lg  text-gray-600" htmlFor="category">Category</label>
            <select
              id="category"
              name="cats"
              className="p-4 border-2 border-gray-300 rounded-md"
            >
              <option value="Cereal">Cereal Crops</option>
              <option value="Pulse">Pulse Crops</option>
              <option value="Oilseed">Oilseed Crops</option>
              <option value="Fruit">Fruit Crops</option>
            </select>

            <label className="text-lg  text-gray-600" htmlFor="coverImage">Cover Image</label>
            <input id="coverImage" type="file" className="p-4 " />

            <label className="text-lg  text-gray-600" htmlFor="uploadImages">Upload Images</label>
            <input id="uploadImages" type="file" multiple className="p-4" />

            <label className="text-lg  text-gray-600" htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Brief descriptions about your crop"
              rows="12"
              className="p-4 border-2 border-gray-300 rounded-md"
            ></textarea>

            <button className="bg-green-500 p-4 rounded-md text-white font-semibold">Create</button>
          </div>

          <div className="details flex-1 flex flex-col gap-3 justify-between">
            <label className="text-lg  text-gray-600" htmlFor="serviceTitle">Speciality</label>
            <input
              id="serviceTitle"
              type="text"
              placeholder="e.g. organic farming"
              className="p-4 border-2 border-gray-300 rounded-md"
            />

            <label className="text-lg  text-gray-600" htmlFor="shortDescription">Short Description</label>
            <textarea
              id="shortDescription"
              placeholder="Short description of your crop"
              rows="10"
              className="p-4 border-2 border-gray-300 rounded-md"
            ></textarea>

            <label className="text-lg  text-gray-600" htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
            <input id="deliveryTime" type="number" className="p-4 border-2 border-gray-300 rounded-md" />
            

            <label className="text-lg  text-gray-600" htmlFor="revisionNumber">Return-policy</label>
            <select
             id="revisionNumber"
              name="cats"
              className="p-4 border-2 border-gray-300 rounded-md"
            >
              <option value="Cereal">Yes</option>
              <option value="Pulse">No</option>
              
            </select>

            <label className="text-lg  text-gray-600" htmlFor="addFeatures">Key Features</label>
            <input id="addFeatures" type="text" placeholder="e.g. Top-quality seeds" className="p-4 border-2 border-gray-300 rounded-md" />
            <input id="addFeatures" type="text" placeholder="e.g. fertilizers less" className="p-4 border-2 border-gray-300 rounded-md" />
            <input id="addFeatures" type="text" placeholder="e.g. organic farming" className="p-4 border-2 border-gray-300 rounded-md" />
            <input id="addFeatures" type="text" placeholder="e.g. days to grow" className="p-4 border-2 border-gray-300 rounded-md" />

            <label className="text-lg  text-gray-600" htmlFor="price">Price</label>
            <input id="price" type="number" className="p-4 border-2 border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
