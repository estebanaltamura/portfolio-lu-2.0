import React, { useState, useRef, useEffect } from 'react';
import Typo from 'components/Typo';

const AboutMeHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBelowXl, setIsBelowXl] = useState(false); // Estado para detectar si la pantalla es menor que xl

  // Especificamos el tipo HTMLVideoElement para videoRef
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detectar tamaño de pantalla para saber si es menor que xl
  useEffect(() => {
    const handleResize = () => {
      setIsBelowXl(window.innerWidth < 1280); // 1280px es el límite de xl en Tailwind
    };

    handleResize(); // Llamar inmediatamente para verificar el tamaño inicial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pausa el video si está en reproducción
        setIsPlaying(false); // Actualiza el estado a "pausado"
      } else {
        videoRef.current.play(); // Reproduce el video si está pausado
        setIsPlaying(true); // Actualiza el estado a "reproduciendo"
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-24 relative">
      {/* Mostrar botón de play/pausa solo en pantallas grandes */}
      <div
        className={`absolute flex justify-center items-center cursor-pointer ${
          isBelowXl ? 'hidden' : 'block'
        }`} // Ocultamos los botones en pantallas menores que xl
        onClick={handlePlayPause}
        style={{ top: '100%', right: '5%', transform: 'translate(-50%, -50%)', zIndex: '100' }}
      >
        <img
          alt="Play/Pause"
          src={isPlaying ? '/images/aboutMe/pause.svg' : '/images/aboutMe/play.svg'} // Cambia el ícono según el estado
        />
      </div>

      <div
        className="relative flex justify-center items-center lg:order-2 m-auto z-10"
        style={{ minWidth: '340px', maxWidth: '340px', overflow: 'hidden', borderRadius: '50%' }} // Hacemos que el contenedor sea circular y ocultamos el desbordamiento
      >
        {/* Video que estará dentro del frame circular */}
        <video
          ref={videoRef} // Asignamos la referencia al video
          src="/images/aboutMe/aboutMeVideo.mp4"
          autoPlay={isBelowXl || isPlaying} // AutoPlay siempre en pantallas pequeñas
          loop // Siempre en bucle
          className="object-cover w-full h-full video-with-blur"
          style={{ position: 'relative', top: '0', left: '0', zIndex: '0', scale: '1.3' }}
        />
      </div>

      {/* El texto toma todo el espacio disponible y estará después de la imagen en pantallas pequeñas */}
      <div className="lg:order-1 z-10 my-auto">
        <p className="jakartaFont font-semibold text-[34px]">A little bit about myself</p>
        <p className="jakartaFont font-normal text-[17px] mt-5">
          I’m a UX/UI designer currently based in Madrid, Spain.
        </p>
        <p className="jakartaFont font-normal text-[17px] mt-3">
          My design journey began long before I realized I wanted to be a designer. With many years in the
          tourism industry, I learned how to understand what people want, even when they don&apos;t know it
          themselves.
        </p>
        <p className="jakartaFont font-normal text-[17px] mt-3">
          Now, in the world of experience design, I specialize in uncovering unspoken emotions and translating
          them into intuitive designs that effectively solve user problems.
        </p>
      </div>
    </div>
  );
};

export default AboutMeHeader;
