import AboutMeHeader from 'components/aboutMe/AboutMeHeader';
import AboutMeCarousel from 'components/aboutMe/AboutMeCarousel';
import DontClickButton from 'components/aboutMe/DontClickButton';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';
import PostitGrid from 'components/PostitGrid';
import Carousel2 from 'components/carousel2/Carousel2';
import Framer from 'components/framer/Framer';
import SpotifyWidget from 'components/spotifyWidget/SpotifyWidget';

const AboutMe = () => {
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const { width } = useWindowSize(); // Obtener solo el ancho de la ventana

  // Obtener la altura total de la página
  const pageHeight = typeof window !== 'undefined' ? document.body.scrollHeight : 0;

  const items = [
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt1.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'I’m open to feedback, always',
      paragraph:
        'No ego here. I believe feedback is one of the best ways to grow and improve. If something isn’t working, I want to hear it :)',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt2.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Loving challenges and a quick learner',
      paragraph:
        'If I don’t know something, I’ll find a way to learn it quickly. Challenges make me want to grow and push me to create better solutions.',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt3.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'I adapt my language to my audience',
      paragraph:
        'No matter if I’m talking to a developer or a stakeholder, I tailor my communication style to make sure we’re speaking the same language.',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt4.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Taking the work seriously without fearing mistakes is part of my process',
      paragraph:
        'Of course, in the way of creating excellent products, there are always doubts and mistakes happen. I’ll ask if needed, and learning from mistakes is part of my religion.',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt5.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Clear communication is non-negotiable',
      paragraph:
        'I believe that great projects only succeed when everyone is on the same page. I keep communication open and straightforward to avoid misunderstandings.',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt6.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Teamwork and a great work vibe',
      paragraph:
        'My commitment is to fostering strong relationships with my teammates, as I firmly believe that good work happens in a positive and collaborative environment.',
    },
  ];

  const aboutMeCarouselDesktopSrcImages = [
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
  ];

  const aboutMeCarouselMobileSrcImages = [
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
    '/images/aboutMe/carouselImages/aboutMeCarousel1.svg',
  ];

  // Bloquear el scroll cuando el confetti esté visible
  useEffect(() => {
    if (isConfettiVisible) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      document.body.style.overflow = ''; // Restaurar scroll
    }
  }, [isConfettiVisible]);

  // Obtener la posición del scroll
  const scrollPositionY = typeof window !== 'undefined' ? window.scrollY : 0;

  return (
    <>
      {isConfettiVisible && (
        <Confetti
          width={width}
          height={pageHeight} // Usar la altura total de la página
          numberOfPieces={2000} // Aumentar la cantidad de confetti
          gravity={0.2}
          wind={0}
          recycle={false}
          run={true}
          initialVelocityY={30}
          // Ajustar la posición inicial del confetti para todo el ancho y la altura visible
          confettiSource={{ x: 0, y: scrollPositionY, w: width, h: 0 }} // Cubrir todo el ancho visible
        />
      )}
      <AboutMeHeader />
      <p className="jakartaFont font-semibold text-[44px] mt-20 mb-9">
        What to expect if you are working with me
      </p>
      <PostitGrid items={items} />
      <div className="flex items-center justify-between mt-8">
        <p className="jakartaFont font-semibold text-[44px]">Kind words from people that worked with me</p>
        <img src="/images/aboutMe/kindWordIcon.svg" alt="" />
      </div>
      {/* <AboutMeCarousel
        desktopSrcImages={aboutMeCarouselDesktopSrcImages}
        mobileSrcImages={aboutMeCarouselMobileSrcImages}
      /> */}
      {/* <Carousel2
        id="carousel2"
        desktopSrcImages={aboutMeCarouselDesktopSrcImages}
        desktopModeWidth="full width"
        desktopMarginBottom={40}
        desktopMarginTop={40}
        desktopModeQuantitySlidesLevel={3}
        gap={120}
      /> */}
      {/* <Framer /> */}

      <div className="flex flex-col  mt-4">
        <p className="jakartaFont font-semibold text-[44px]">Designing without music...what’s that?</p>
        <p className="jakartaFont font-regular text-[17px] mt-10" style={{ lineHeight: '32px' }}>
          Kind words from people that worked with me
        </p>
        <p className="jakartaFont font-regular text-[17px]" style={{ lineHeight: '32px' }}>
          I believe one of the best ways to get to know someone is through their music.{' '}
        </p>
        <p className="jakartaFont font-regular text-[17px]" style={{ lineHeight: '32px' }}>
          From slower tracks that help me focus to upbeat rhythms that take me to more creative worlds, music
          is always present while I design.{' '}
        </p>
        <p className="jakartaFont font-regular text-[17px]" style={{ lineHeight: '32px' }}>
          Hit play, dive into my world, and maybe you&apos;ll find inspiration just like I do.{' '}
        </p>
      </div>
      {/* <SpotifyWidget /> */}
      <DontClickButton setConfettiVisible={setConfettiVisible} />
    </>
  );
};

export default AboutMe;
