import React, { useEffect, useState, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

interface ICarouselPropsTypes {
  id: string;
  desktopSrcImages: string[];
  desktopModeWidth: '100%' | 'full width';
  desktopModeQuantitySlidesLevel?: number;
  gap?: number;
  desktopMarginBottom: number;
  desktopMarginTop: number;
}

const Carousel2: React.FC<ICarouselPropsTypes> = ({
  id,
  desktopSrcImages,
  desktopModeWidth,
  desktopModeQuantitySlidesLevel,
  gap,
  desktopMarginBottom,
  desktopMarginTop,
}) => {
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (innerWidth && carouselRef.current) {
      const glide = new Glide(carouselRef.current, {
        type: 'carousel',
        focusAt: 'center',
        perView: desktopModeQuantitySlidesLevel || 1,
        startAt: 1,
        gap: gap || 40,
        autoplay: 3000, // Movimiento automático cada 3 segundos
        animationDuration: 1000, // Duración suave para la transición
        hoverpause: true, // Pausar al pasar el mouse
        peek: {
          before: desktopModeWidth === 'full width' ? 0 : 200,
          after: desktopModeWidth === 'full width' ? 0 : 200,
        },
      });
      glide.mount();
    }
  }, [innerWidth, desktopModeWidth, desktopModeQuantitySlidesLevel]);

  useEffect(() => {
    const initialWidth = window.innerWidth;
    setInnerWidth(initialWidth);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (innerWidth === null) {
    return null;
  }

  return (
    <div
      id={id}
      ref={carouselRef}
      style={{
        position: 'relative',
        left: desktopModeWidth === 'full width' ? -((innerWidth - 1184) / 2) : 0,
        width: desktopModeWidth === 'full width' ? innerWidth : '100%',
        marginTop: `${desktopMarginTop}px`,
        marginBottom: `${desktopMarginBottom}px`,
      }}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {desktopSrcImages.map((src, index) => (
            <li className="glide__slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel2;
