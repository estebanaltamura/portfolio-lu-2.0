import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface IAboutMeCarousel {
  desktopSrcImages: string[];
  mobileSrcImages: string[];
}

const AboutMeCarousel: React.FC<IAboutMeCarousel> = ({ desktopSrcImages, mobileSrcImages }) => {
  const items = desktopSrcImages.map((src, index) => (
    <div key={index} className="flex justify-center">
      <img src={src} alt={`Slide ${index + 1}`} className="w-[500px] h-120" />
    </div>
  ));

  return (
    <div className="relative mt-20" style={{ width: '100%' }}>
      <AliceCarousel
        items={items}
        infinite
        autoPlay
        autoPlayInterval={1500} // Cambia automáticamente cada 3 segundos
        mouseTracking
        disableButtonsControls
        disableDotsControls
        responsive={{
          0: { items: 1 }, // 1 item visible en pantallas menores a 796px
          796: { items: 2 }, // 2 items visibles en pantallas entre 796px y 1200px
          1200: { items: 2 }, // 3 items visibles en pantallas mayores a 1200px
        }}
        paddingLeft={10} // Para crear un gap entre los slides
        paddingRight={10} // Para crear un gap entre los slides
      />
    </div>
  );
};

export default AboutMeCarousel;
