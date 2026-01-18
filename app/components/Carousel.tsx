"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        centeredSlides={true}
      >
        {["aws.jpeg", "docker.png", "aws2.jpeg"].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <Image
                src={`/${img}`}
                alt="slide"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
