import React from 'react';

import bgImg from "../assets/images/arts_crafts_images20.jpg"

import artist1 from "../assets/images/arts_crafts_images21.jpg"
import artist2 from "../assets/images/arts_crafts_images22.jpg"
import artist3 from "../assets/images/arts_crafts_images23.jpg"
import artist4 from "../assets/images/arts_crafts_images24.jpg"

const OurMordernArtist = () => {
    return (
      <div className="mt-40">
        <div
          className="bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="h-[500px]">
            <h1 className='text-3xl text-center text-white font-bold'>Our Artist</h1>
            <div className="flex justify-evenly space-x-5 items-center p-5 mt-10">
              <div>
                <img className="max-h-72" src={artist1} alt="" />
              </div>
              <div>
                <img className="max-h-72" src={artist2} alt="" />
              </div>
              <div>
                <img className="max-h-72" src={artist3} alt="" />
              </div>
              <div>
                <img className="max-h-72" src={artist4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurMordernArtist;