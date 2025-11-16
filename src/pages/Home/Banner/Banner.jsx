import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className=" relative">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
      </Carousel>
      <div
        className="absolute inset-0 
        flex flex-col md:flex-row 
        mt-70
        md:right-180
        items-center 
        justify-center 
        gap-2
        px-4"
      >
        {/* Track Your Parcel */}
        <button className="flex items-center gap-2  text-black font-semibold px-6 py-2 rounded-full border-gray-500 bg-lime-400 hover:bg-lime-500 duration-200 w-full md:w-auto justify-center ">
          Track Your Parcel
        </button>

        {/* Round Arrow Button */}
        <button className="bg-black text-lime-300 p-2 rounded-full hover:opacity-80 duration-200 text-sm mx-auto md:mx-0">
          <FaCircleArrowUp className="rotate-45" />
        </button>

        {/* Be A Rider */}
        <button className="px-6 py-2 bg-white text-black rounded-full border border-gray-300 font-semibold hover:bg-gray-100 duration-200 w-full md:w-auto justify-center">
          Be A Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
