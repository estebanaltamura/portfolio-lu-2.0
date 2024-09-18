interface CaseHeaderProps {
  title: string;
  role: string;
  teamStructure: string;
  researchMethods: string;
  platform: string;
  timeFrame: string;
  tools: string;
}

const CaseHeader = ({
  title,
  role,
  teamStructure,
  researchMethods,
  platform,
  timeFrame,
  tools,
}: CaseHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-8 sm:gap-x-32">
      {/* Contenedor de texto - Alineamos todo a la izquierda en pantallas pequeñas */}
      <div className="flex flex-col justify-between h-full lg:order-1 space-y-8">
        {/* Título */}
        <p className="jakartaFont font-bold text-5xl leading-[58px] mt-2 mb-7">{title}</p>

        {/* Información adicional organizada en un grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Sección de la izquierda */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            {/* Mi rol */}
            <div>
              <p className="jakartaFont  text-lg font-bold">My Role</p>
              <p className="jakartaFont text-base leading-7 mt-2">{role}</p>
            </div>

            {/* Estructura del equipo */}
            <div className="pt-6" style={{ whiteSpace: 'pre-line' }}>
              <p className="jakartaFont  text-lg font-bold">Team Structure</p>
              <p className="jakartaFont text-base mt-2">{teamStructure}</p>
            </div>

            {/* Métodos de investigación */}
            <div className="pt-6">
              <p className="jakartaFont  text-lg font-bold">Research Methods</p>
              <p className="jakartaFont text-base mt-2">{researchMethods}</p>
            </div>
          </div>

          {/* Sección de la derecha */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            {/* Plataforma */}
            <div>
              <p className="jakartaFont  text-lg font-bold">Platform</p>
              <p className="jakartaFont text-base mt-2">{platform}</p>
            </div>

            {/* Tiempo */}
            <div className="pt-6" style={{ whiteSpace: 'pre-line' }}>
              <p className="jakartaFont  text-lg font-bold">Time Frame</p>
              <p className="jakartaFont text-base mt-2">{timeFrame}</p>
            </div>

            {/* Herramientas */}
            <div className="pt-6">
              <p className="jakartaFont  text-lg font-bold">Tools</p>
              <p className="jakartaFont text-base mt-2">{tools}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseHeader;
