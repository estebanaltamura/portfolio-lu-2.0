import React, { useEffect, useState, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

type CarouselDesktopProps = {
  desktopImages: string[];
};

const CarouselDesktop = ({ desktopImages }: CarouselDesktopProps) => {
  // Definir las imágenes de escritorio dentro del componente

  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Inicializar Glide.js cuando el ancho de la ventana esté disponible
  useEffect(() => {
    if (innerWidth && innerWidth >= 1280 && carouselRef.current) {
      const glide = new Glide(carouselRef.current, {
        type: 'carousel',
        focusAt: 'center',
        perView: 4, // Cantidad de slides visibles
        startAt: 0,
        gap: 120, // Espacio entre slides
        peek: {
          before: 0,
          after: 0,
        },
      });
      glide.mount();
    }
  }, [innerWidth]);

  // Detectar el ancho de la ventana y solo renderizar si es mayor a 1280px
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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #4c4c4c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Si el ancho es menor a 1280px, no se muestra nada
  if (!innerWidth || innerWidth < 1280) {
    return null;
  }

  return (
    <div
      id="desktop-carousel"
      ref={carouselRef}
      style={{
        position: 'relative',
        width: '100%',
        marginTop: '60px',
        marginBottom: '30px',
      }}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {desktopImages.map((src, index) => (
            <li className="glide__slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </li>
          ))}
        </ul>
      </div>
      <div data-glide-el="controls">
        <button style={{ ...buttonStyle, left: '10px' }} data-glide-dir="<">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button style={{ ...buttonStyle, right: '10px' }} data-glide-dir=">">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselDesktop;
