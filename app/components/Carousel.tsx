"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
        
    >
      <SwiperSlide>
       <img src="/docker.png" />
      </SwiperSlide>

      <SwiperSlide>
      <img src="/aws2.jpeg" />
      </SwiperSlide>

   
       <SwiperSlide>
       <img src="/docker.png" />
      </SwiperSlide>

      <SwiperSlide>
      <img src="/aws2.jpeg" />
      </SwiperSlide>

    </Swiper>
  );
}
