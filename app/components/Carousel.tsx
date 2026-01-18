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
        <img src="/images/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
