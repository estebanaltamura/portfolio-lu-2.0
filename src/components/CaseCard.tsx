import React from 'react';

interface CaseCardProps {
  mainImage: string;
  title: string;
  description: string;
  sideImage: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ mainImage, title, description, sideImage }) => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Marco envolvente como fondo del contenedor */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain z-0"
        style={{ backgroundImage: "url('/images/cardCaseTyr/frame.png')" }}
      ></div>

      {/* Contenido del CaseCard con margen interno para separar del marco */}
      <div className="relative z-10 w-full max-w-md px-6 py-8 md:px-10 md:py-12">
        {/* Imagen superior tomando todo el ancho */}
        <img src={mainImage} alt="Main" className="w-full h-auto" />

        {/* Contenedor inferior */}
        <div className="flex flex-row justify-between items-start w-full mt-6 md:mt-8">
          {/* Contenedor izquierdo con título y descripción */}
          <div className="flex flex-col mr-4">
            <h2 className="jakartaFont font-bold text-xl md:text-2xl">{title}</h2>
            <p className="jakartaFont font-medium text-base md:text-lg mt-2 md:mt-3">{description}</p>
          </div>

          {/* Contenedor derecho con imagen alineada arriba a la derecha */}
          <div className="flex-shrink-0">
            <img src={sideImage} alt="Side" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
