import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Define the array of slides with numbers
const slides = [
  { icon: '/images/aboutMe/carouselImages/aboutMeCarousel1.svg' },
  { icon: '/images/aboutMe/carouselImages/aboutMeCarousel2.svg' },
  { icon: '/images/aboutMe/carouselImages/aboutMeCarousel3.svg' },
  { icon: '/images/aboutMe/carouselImages/aboutMeCarousel4.svg' },
  { icon: '/images/aboutMe/carouselImages/aboutMeCarousel5.svg' },
];

const Framer = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

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

  // Detect if the window size is below "xl" (1280px)
  const isBelowXl = innerWidth ? innerWidth < 1280 : false;

  // Width of each card should be proportional to the visible area
  const cardWidth = innerWidth ? innerWidth / slides.length : 200;

  return (
    <div
      className={`relative h-full overflow-hidden py-12 bg-white mx-auto ${isBelowXl ? 'w-full' : ''}`} // Apply full width if below "xl" breakpoint
      style={{
        width: isBelowXl ? '100%' : `${innerWidth}px`, // Full width for smaller screens
        maxWidth: isBelowXl ? '100%' : `${innerWidth}px`, // Adjust max-width if needed
        position: 'relative',
        left: isBelowXl ? '0' : innerWidth ? -(innerWidth - 1183) / 2 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on mouse leave
    >
      {/* Overlay Gradients on the sides */}
      <div className="absolute inset-0 z-20">
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white to-transparent filter blur-3"></div>
        <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-white to-transparent filter blur-3"></div>
      </div>

      {/* Motion div for the sliding animation */}
      <motion.div
        className="flex"
        animate={{
          x: isHovered ? 0 : ['0%', '-100%'], // Pause when hovered
          transition: {
            ease: 'linear',
            duration: 60, // Adjust speed
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
        style={{ cursor: 'text' }} // Hand cursor on hover
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0" // Ensure each slide doesn't shrink
            style={{
              height: '450px', // Set fixed height
              width: 'auto', // Automatically adjust width based on height
              marginRight: '20px', // Add margin between cards
            }}
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={slide.icon}
                alt={`Slide ${index + 1}`}
                className="h-full w-auto object-cover" // Height-fixed, width auto-adjusts
                style={{ cursor: 'pointer' }} // Hand cursor on hover
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Framer;
