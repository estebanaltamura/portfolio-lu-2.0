import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const MobileCarousel: React.FC = () => {
  // Definimos las imágenes para el carousel en un objeto
  const images = {
    items: [
      '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
      '/images/aboutMe/carouselImages/aboutMeCarousel2.svg',
      '/images/aboutMe/carouselImages/aboutMeCarousel3.svg',
      '/images/aboutMe/carouselImages/aboutMeCarousel4.svg',
      '/images/aboutMe/carouselImages/aboutMeCarousel5.svg',
    ],
  };

  // Renderizamos las imágenes
  const slides = images.items.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
    </SwiperSlide>
  ));

  return (
    <div className="w-full mx-auto relative mt-8 mb-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Retraso de 3 segundos entre slides
          disableOnInteraction: false, // No se detiene el autoplay al interactuar con el slider
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default MobileCarousel;
