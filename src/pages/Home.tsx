import Typo from 'components/Typo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickCase1 = () => {
    navigate('/tyr-case');
  };

  const handleClickCase2 = () => {
    navigate('/abitab');
  };

  const scrollDownClickHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Selecciona todos los elementos <p> en el DOM
    const paragraphs = document.querySelectorAll('h1');

    const colors = ['#CB76FF', '#8676FF', '#CE2FD3', '#75BDFF']; // Lista de 5 colores

    paragraphs.forEach((p) => {
      // Obtiene el texto del <p> y lo divide en palabras
      if (!p.textContent) return;
      const words = p.textContent.split(' ');

      // Reemplaza el contenido del <p> con palabras envueltas en <span> con colores aleatorios
      p.innerHTML = words
        .map((word) => {
          // Selecciona un color aleatorio
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return `<span class="color-transition" style="--hover-color: ${randomColor}">${word}</span>`;
        })
        .join(' ');
    });
  }, []);

  return (
    <div className="w-full mx-auto mt-6 sm:mt-16">
      <div className="relative">
        <h1 className="text-[33px] font-medium sm:text-[64px] xl:text-[86px]  jakartaFont leading-[40px] sm:leading-[94px]">
          I design with empathy <span className="PoetsenOne">*</span> to craft meaningful user experiences
        </h1>

        <img
          className="absolute top-[110px] xs:hidden xl:flex right-[0px] w-[80px] sm:w-[130px]"
          src="/favicon.svg"
          alt=""
        />
      </div>

      <div className="flex flex-col sm:flex-row mt-6">
        {/* Texto - Cambia de posición en mobile */}
        <p className="order-1 sm:order-3 jakartaFont font-normal text-[12px] sm:text-[16px] w-full max-w-[410px]">
          * Lucía Rossini is a UX/UI designer that focuses on creating accesible and human experiences, where
          people feel safe and confident interacting with products they understand
        </p>
        <div className="flex-grow order-0 sm:order-2"></div>

        {/* Botón - Cambia de posición en mobile */}
        <button
          onClick={scrollDownClickHandler}
          className="order-2 sm:order-1 spaceGroteskFont text-[16px] xl:text-[23px] rounded-full border-4 xl:border-8 border-black bg-[#CB76FF] text-black font-bold w-[144px] h-[50px] xl:w-[250px] xl:h-[89px] block mt-6 wobble-horizontal"
        >
          See my work
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-16">
        <div className="cursor-pointer flex justify-center" onClick={handleClickCase1}>
          <img src="/images/home/case1.png" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center" onClick={handleClickCase2}>
          <img src="/images/home/case2.png" alt="" />
        </div>
        {/* <div className="cursor-pointer flex justify-center" onClick={handleClickCase3}>
          <img src="/images/home/case3.png" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center" onClick={handleClickCase4}>
          <img src="/images/home/case4.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
