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
    '/images/52177c0b7cd848fd9cfa118f03b468e3.jpg',
    '/images/f68f0353ad894e67a9bec1eea643ebb4.jpg',
    '/images/image3.jpg',
    '/images/image1.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div 
      className="carousel-container"
      style={{
        width: '100%',
        maxWidth: '1450px', // Optional: cap max width on very large screens
        margin: '0 auto',   // Center the carousel
        position: 'relative',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60} // Space between slides
        centeredSlides={true} // Centers the active slide
        slidesPerView={1} // Show one slide at a time (adjust for more, e.g., 3 for multiple visible)
        navigation // Enables arrow navigation
        pagination={{ clickable: true }} // Enables dot pagination
        autoplay={{ delay: 4000, disableOnInteraction: false }} // Optional auto-slide every 3s
        loop={true} // Infinite loop
        style={{
          width: '100%',
          height: 'auto', // No fixed height
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide 
            key={index}
            style={{
              width: '100%',
              height: 'auto',
              position: 'relative', // Required for fill images
            }}
          >
            <div 
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '36.25%', // 16:9 aspect ratio (adjust as needed: e.g., 75% for 4:3)
              }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="carousel-image"
                style={{
                  objectFit: 'contain', // Full image visible (use 'cover' to fill/crop)
                  objectPosition: 'center',
                }}
                sizes="(max-width: 700px) 100vw, 1200px" // Responsive image sizing
                priority={index === 0} // Preload first image
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;