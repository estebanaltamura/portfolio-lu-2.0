import React, { useState, useRef, useEffect } from 'react';
import Typo from 'components/Typo';
import { menuBarHeight } from 'globalConfig';

const AboutMeHeader = () => {
  const [isPlaying, setIsPlaying] = useState<boolean | undefined>();
  const [isBelowXl, setIsBelowXl] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [position, setPosition] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowXl(window.innerWidth < 1024);
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let calculatedPosition = 0;
    if (width > 1264) {
      calculatedPosition = (width - 1264) / 2 + 5;
    } else if (width > 1024) {
      calculatedPosition = 7;
    } else {
      calculatedPosition = width / 2 - 167;
    }

    setPosition(calculatedPosition);
  }, [width]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div
        className={`absolute bg-[#F5F5FF] w-screen ${isBelowXl ? 'h-[420px]' : 'h-[465px]'} right-0`}
        style={{ top: menuBarHeight }}
      ></div>
      {position !== null && (
        <img
          src="/images/aboutMe/frame.svg"
          alt=""
          style={{
            position: 'absolute',
            top: '90px',
            right: `${position}px`,
            zIndex: 5, // Disminuimos el z-index
            width: width < 1024 ? '335px' : '390px',
            pointerEvents: 'none', // Opcional: permite clics a través de la imagen
          }}
        />
      )}

      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-24 relative mt-5">
        {/* Botón de play/pausa */}
        <div
          onClick={handlePlayPause}
          className="absolute flex justify-center items-center cursor-pointer"
          style={{
            top: isBelowXl ? '310px' : '100%',
            right: isBelowXl ? '28%' : '8.4%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
          }}
        >
          <img
            alt="Play/Pause"
            style={{ width: '60px' }}
            src={isPlaying ? '/images/aboutMe/pause.svg' : '/images/aboutMe/play.svg'}
          />
        </div>

        <div
          onClick={handlePlayPause}
          className="relative flex justify-center items-center lg:order-2 m-auto cursor-pointer"
          style={{
            minWidth: width < 1024 ? '290px' : '340px',
            maxWidth: width < 1024 ? '290px' : '340px',
            overflow: 'hidden',
            borderRadius: '50%',
            zIndex: 10, // Aumentamos el z-index
          }}
        >
          {/* Video dentro del div */}
          <video
            ref={videoRef}
            src="/images/aboutMe/aboutMeVideo.mp4"
            autoPlay={isBelowXl || isPlaying}
            loop={isBelowXl}
            className="object-cover w-full h-full video-with-blur"
            style={{
              position: 'relative',
              top: '0',
              left: '0',
              zIndex: '0',
              transform: typeof isPlaying === 'boolean' ? 'scale(1.3)' : 'scale(1)',
              pointerEvents: 'none', // Asegura que el video no bloquee el clic
            }}
            poster="/images/aboutMe/lucia.svg"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="lg:order-1 z-5 my-auto lg:mt-5 mt-32">
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
            Now, in the world of experience design, I specialize in uncovering unspoken emotions and
            translating them into intuitive designs that effectively solve user problems.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMeHeader;
