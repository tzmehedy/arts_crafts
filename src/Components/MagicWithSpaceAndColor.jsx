import React from 'react';
import leftImg from "../assets/images/arts_crafts_images25.jpg"

const MagicWithSpaceAndColor = () => {
    return (
      <div className="flex justify-center items-center mt-32 p-10">
        <div className="w-1/2">
          <img src={leftImg} alt="" />
        </div>
        <div className="w-1/2 space-y-7">
          <h1 className='text-3xl font-bold'>Impressionist's Magic with Space & Color</h1>
          <p className='text-justify'>
            Impressionism captures the fleeting essence of a moment through its
            innovative use of space and color. Rather than focusing on precise
            details, Impressionists like Monet and Renoir used soft, blurred
            boundaries and broad brushstrokes to create fluid, expansive spaces
            that feel alive and dynamic. Color played a central role, with
            bright, luminous hues applied in dabs or strokes of pure pigment,
            allowing them to mix optically in the viewer's eye. This technique
            mimicked the natural play of light, creating shimmering, vibrant
            effects that brought scenes to life. Through this delicate balance
            of light, air, and movement, Impressionism transforms ordinary
            moments into magical, timeless experiences.
          </p>
          <button className='btn btn-secondary'>More Details</button>
        </div>
      </div>
    );
};

export default MagicWithSpaceAndColor;