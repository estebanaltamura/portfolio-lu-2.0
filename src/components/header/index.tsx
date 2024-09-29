import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleClickAboutMe = () => {
    navigate('/about-me');
    setIsOpen(false);
  };

  const handleClickResume = () => {
    const driveUrl = 'https://drive.google.com/file/d/1Mkhyhu2k3nldxi0AT0u9sl7LHM-L6g3a/view?usp=sharing';
    window.open(driveUrl, '_blank');
    setIsOpen(false);
  };

  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/lucia-rossini-ux-ui-designer/', '_blank');
    setIsOpen(false);
  };

  // Efecto para bloquear/desbloquear el scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear el scroll
    } else {
      document.body.style.overflow = 'auto'; // Restaurar el scroll
    }

    // Limpiar el estilo cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header
      className="bg-white h-[52px] w-full p-4 fixed"
      style={{ borderBottom: '1px solid black', zIndex: 100 }}
    >
      <div className="max-w-[1248px] mx-auto h-full flex items-center justify-between">
        {/* Opciones de escritorio (solo visibles en pantallas mayores a 600px) */}
        <div className="hidden sm:flex space-x-5 sm:space-x-8">
          <p className="cursor-pointer jakartaFont" onClick={handleClickHome}>
            Home
          </p>
          <p className="cursor-pointer jakartaFont" onClick={handleClickAboutMe}>
            About me
          </p>
        </div>

        <div className="flex-grow"></div>

        <div className="hidden sm:flex space-x-5 sm:space-x-8">
          <p className="cursor-pointer jakartaFont" onClick={handleClickResume}>
            Resume
          </p>
          <p className="cursor-pointer jakartaFont" onClick={handleClickLinkedIn}>
            LinkedIn
          </p>
        </div>

        {/* Botón del menú hamburguesa para móviles (visible solo en pantallas menores a 600px) */}
        <div className="block sm:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              // Ícono de "X" para cerrar el menú
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícono de hamburguesa
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles (visible solo cuando se hace clic en el menú hamburguesa) */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 bg-white flex flex-col justify-center items-center space-y-8">
          {/* Botón para cerrar (Cruz negra en la esquina superior derecha) */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-4xl font-bold focus:outline-none"
          >
            &times;
          </button>

          <p className="cursor-pointer jakartaFont text-2xl" onClick={handleClickHome}>
            Home
          </p>
          <p className="cursor-pointer jakartaFont text-2xl" onClick={handleClickAboutMe}>
            About me
          </p>
          <p className="cursor-pointer jakartaFont text-2xl" onClick={handleClickResume}>
            Resume
          </p>
          <p className="cursor-pointer jakartaFont text-2xl" onClick={handleClickLinkedIn}>
            LinkedIn
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
