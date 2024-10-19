import { useContext } from "react"
import bgslider from "../assets/images/arts_crafts_images04.png"
import sliderImage1 from "../assets/images/arts_crafts_images06.png"
import sliderImage2 from "../assets/images/arts_crafts_images07.png"
import sliderImage3 from "../assets/images/arts_crafts_images09.jpg"
import sliderImage4 from "../assets/images/arts_crafts_images10.jpg"

import "animate.css";
import { AuthContext } from "../AuthProvider/AuthProvider"
import ArtAndCategorySection from "../Components/ArtAndCategorySection"
import CraftItems from "../Components/CraftItems"
import Footer from "../Components/Footer"
import OurMordernArtist from "../Components/OurMordernArtist"

const Home = () => {

  const {user} = useContext(AuthContext)
    return (
      <div>
        {/* Hero section */}

        
        <div>
          <div className="carousel w-full h-[calc(100vh-150px)]">
            <div
              id="item1"
              style={{
                backgroundImage: `url(${bgslider})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="carousel-item w-full"
            >
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center text-[#DB2A93] font-semibold">
                  <img
                    className="w-24 h-20 md:w-64 md:h-48 animate__animated animate__fadeInRight "
                    src={sliderImage1}
                    alt=""
                  />
                  <div className="animate__animated animate__backInUp">
                    <p>Frame Type:Wooden Frame</p>
                    <p>Artiest: Md Touhidur Zaman</p>
                    <p>Price: $100</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="item2"
              style={{
                backgroundImage: `url(${bgslider})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="carousel-item w-full"
            >
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center text-[#DB2A93] font-semibold">
                  <img
                    className="w-24 h-20 md:w-64 md:h-48 animate__animated animate__fadeInRight "
                    src={sliderImage2}
                    alt=""
                  />
                  <div className="animate__animated animate__backInUp">
                    <p>Frame Type:Wooden Frame</p>
                    <p>Artiest: Md Touhidur Zaman</p>
                    <p>Price: $100</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="item3"
              style={{
                backgroundImage: `url(${bgslider})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="carousel-item w-full"
            >
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center text-[#DB2A93] font-semibold">
                  <img
                    className="w-24 h-20 md:w-64 md:h-48 animate__animated animate__fadeInRight "
                    src={sliderImage3}
                    alt=""
                  />
                  <div className="animate__animated animate__backInUp">
                    <p>Frame Type:Wooden Frame</p>
                    <p>Artiest: Md Touhidur Zaman</p>
                    <p>Price: $100</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="item4"
              style={{
                backgroundImage: `url(${bgslider})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="carousel-item w-full"
            >
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center font-bold text-[#DB2A93] font-semibold">
                  <img
                    className="w-24 h-20 md:w-64 md:h-48 animate__animated animate__fadeInRight "
                    src={sliderImage4}
                    alt=""
                  />
                  <div className="animate__animated animate__backInUp">
                    <p>Frame Type:Wooden Frame</p>
                    <p>Artiest: Md Touhidur Zaman</p>
                    <p>Price: $100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>


        {/* Craft Items */}

        <CraftItems></CraftItems>

        {/* Art & Category Section */}

        <ArtAndCategorySection></ArtAndCategorySection>

        {/* Modern Artist */}
        <OurMordernArtist></OurMordernArtist>


        {/* Footer */}

        <Footer></Footer>
      </div>
    );
};

export default Home;