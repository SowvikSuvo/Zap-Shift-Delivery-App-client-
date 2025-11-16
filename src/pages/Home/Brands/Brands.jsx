import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vec from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const Brands = () => {
  return (
    <div className="mt-20 space-y-8 text-center">
      <h2 className="text-3xl font-extrabold">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={amazon} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazon_vec} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={start_people} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
