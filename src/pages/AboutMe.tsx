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
import PostitGridAboutMe from 'components/aboutMe/PostitGridAboutMe';
import MobileCarousel from 'components/aboutMe/mobileCarousel';

const AboutMe = () => {
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const { width } = useWindowSize(); // Obtener solo el ancho de la ventana

  // Obtener la altura total de la página
  const pageHeight = typeof window !== 'undefined' ? document.body.scrollHeight : 0;

  const items = [
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt2.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Challenge-lover and quick  ',
      paragraph:
        'If there’s something I don’t know, I’ll find the way to learn it quickly. Challenges make me grow and push me to create better solutions',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt1.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Always open to feedback',
      paragraph: 'No ego here. I believe feedback is one of the best ways to grow and improve',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt3.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Capable of adappting the way I speak',
      paragraph:
        'Whether I’m talking to a developer or a stakeholder, I tailor my communication style to make sure we are speaking the same language',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt4.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Embracing mistakes fuels creativity',
      paragraph:
        'Doubts and mistakes are allies when it comes to creation. Of course, in the way of creating excellent products, there will always appear doubts and mistakes. If needed I’ll ask for advice or new perspectives: learning from mistakes is part of my religion',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt5.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Clear communication is non-negotiable',
      paragraph:
        'I believe that great projects only succeed when everyone is on the same page. I keep communication open and straightforward to avoid misunderstandings',
    },
    {
      icon: (
        <img src="images/aboutMe/postItImages/aboutMePostIt6.svg" alt="About me" style={{ width: '100%' }} />
      ),
      title: 'Teamwork and a great work vibes',
      paragraph:
        'My commitment is to fostering strong relationships with my teammates, as I firmly believe that good work happens in a positive and collaborative environment',
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

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

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

      <p className="jakartaFont font-semibold text-[34px] mt-20 lg:mt-36 mb-9">
        What to expect if you are working with me
      </p>
      <PostitGridAboutMe items={items} />
      <div className="flex items-center mt-16">
        <p className="jakartaFont font-semibold text-[34px]">Testimonials of people that worked with me</p>
        {/* <img src="/images/aboutMe/kindWordIcon.svg" alt="" style={{ width: '120px', marginLeft: '70px' }} /> */}
      </div>
      {width > 796 ? <Framer /> : <MobileCarousel />}

      <DontClickButton setConfettiVisible={setConfettiVisible} />

      <div className="flex flex-col mt-16 mb-10">
        <p className="jakartaFont font-semibold text-[34px]">Designing without music...what’s that?</p>
        <p className="jakartaFont font-regular text-base leading-6 mt-5">
          For me, music is an essential part of my creative process.
        </p>
        <p className="jakartaFont font-regular text-base leading-6 mt-1">
          I believe one of the best ways to get to know someone is through their music.
        </p>
        <p className="jakartaFont font-regular text-base leading-6 mt-1">
          From melow songs that help me focus, to upbeat rhythms that take me to more creative states, music
          is always present while I design.
        </p>
        <p className="jakartaFont font-regular text-base leading-6 mt-1">
          Hit play, dive into my world, and maybe you&apos;ll find inspiration just like I do.
        </p>
      </div>
      <div className="relative mt-20 md:mt-0  ">
        <img
          src="/images/aboutMe/cat.svg"
          alt=""
          className="absolute top-[-72px]  md:top-[-90px] right-[30px] w-[80px] md:w-[100px]"
        />
        <SpotifyWidget />
      </div>
    </>
  );
};

export default AboutMe;
