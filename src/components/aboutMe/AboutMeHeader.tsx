import Typo from 'components/Typo';

const AboutMeHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-24">
      {/* La imagen estará centrada y antes del texto en pantallas pequeñas, y después en pantallas grandes */}
      <div
        className="relative flex justify-center lg:order-2 m-auto"
        style={{ minWidth: '340px', maxWidth: '340px' }}
      >
        <img src="/images/aboutMe/aboutMe.png" alt="About me" style={{ width: '100%' }} />
      </div>

      {/* El texto toma todo el espacio disponible y estará después de la imagen en pantallas pequeñas */}
      <div className="space-y-8 lg:order-1 pt-4">
        <p className="jakartaFont font-semibold text-[44px]">A little about myself</p>
        <p className="jakartaFont font-normal text-[17px]">
          I’m a UX/UI designer currently based in Madrid, Spain.
        </p>
        <p className="jakartaFont font-normal text-[17px]">
          My design journey began long before I realized I wanted to be a designer. With many years in the
          tourism industry, I learned how to understand what people want, even when they don&apos;t know it
          themselves.
        </p>
        <p className="jakartaFont font-normal text-[17px]">
          Now, in the world of experience design, I specialize in uncovering unspoken emotions and translating
          them into intuitive designs that effectively solve user problems.
        </p>
      </div>
    </div>
  );
};

export default AboutMeHeader;
