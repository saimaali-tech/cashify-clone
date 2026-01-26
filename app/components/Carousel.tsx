'use client'; // Use this for client-side interactivity in Next.js App Router

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  // Array of image paths from public folder
  const images = [
    '/images/image1.jpg',
    '/images/image3.jpg',
     '/images/image1.jpg',
    '/images/image3.jpg',
  
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60} // Space between slides
        centeredSlides={true} // Centers the active slide
        slidesPerView={1} // Show one slide at a time (adjust for more, e.g., 3 for multiple visible)
        navigation // Enables arrow navigation
        pagination={{ clickable: true }} // Enables dot pagination
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional auto-slide every 3s
        loop={true} // Infinite loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={4000} // Adjust based on your image size
              height={1000}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;