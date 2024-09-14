import AboutMeGrid from 'components/aboutMe/PostitGrid';
import AboutMeHeader from 'components/aboutMe/AboutMeHeader';
import AboutMeCarousel from 'components/aboutMe/AboutMeCarousel';
import DontClickButton from 'components/aboutMe/DontClickButton';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';
import PostitGrid from 'components/aboutMe/PostitGrid';

const AboutMe = () => {
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const { width } = useWindowSize(); // Obtener solo el ancho de la ventana

  // Obtener la altura total de la página
  const pageHeight = typeof window !== 'undefined' ? document.body.scrollHeight : 0;

  const items = [
    {
      header: 'I’m open to feedback, always',
      paragraph:
        'No ego here. I believe feedback is one of the best ways to grow and improve. If something isn’t working, I want to hear it :)',
    },
    {
      header: 'Loving challenges and a quick learner',
      paragraph:
        'If I don’t know something, I’ll find a way to learn it quickly. Challenges make me want to grow and push me to create better solutions.',
    },
    {
      header: 'I adapt my language to my audience',
      paragraph:
        'No matter if I’m talking to a developer or a stakeholder, I tailor my communication style to make sure we’re speaking the same language.',
    },
    {
      header: 'Taking the work seriously without fearing mistakes is part of my process',
      paragraph:
        'Of course, in the way of creating excellent products, there are always doubts and mistakes happen. I’ll ask if needed, and learning from mistakes is part of my religion.',
    },
    {
      header: 'Clear communication is non-negotiable',
      paragraph:
        'I believe that great projects only succeed when everyone is on the same page. I keep communication open and straightforward to avoid misunderstandings.',
    },
    {
      header: 'Teamwork and a great work vibe',
      paragraph:
        'My commitment is to fostering strong relationships with my teammates, as I firmly believe that good work happens in a positive and collaborative environment.',
    },
  ];

  const aboutMeCarouselDesktopSrcImages = [
    '/images/frame350.jpg',
    '/images/frame350.jpg',
    '/images/frame350.jpg',
    '/images/frame350.jpg',
    '/images/frame350.jpg',
  ];

  const aboutMeCarouselMobileSrcImages = [
    '/images/frame350.jpg',
    '/images/frame350.jpg',
    '/images/frame350.jpg',
    '/images/frame350.jpg',
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
      <PostitGrid items={items} />
      <DontClickButton setConfettiVisible={setConfettiVisible} />
      <AboutMeCarousel
        desktopSrcImages={aboutMeCarouselDesktopSrcImages}
        mobileSrcImages={aboutMeCarouselMobileSrcImages}
      />
    </>
  );
};

export default AboutMe;
