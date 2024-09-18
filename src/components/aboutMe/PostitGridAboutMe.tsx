const PostitGridAboutMe = ({
  items,
}: {
  items: { icon?: JSX.Element; title?: string; paragraph: string }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-y-16 gap-x-[calc((100%-969px)/2)] justify-center max-w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5FF] w-full xl:w-[323px] h-full rounded-xl mx-auto"
          style={{ padding: '30px' }}
        >
          {/* Ajustamos flex para que sea row en sm y column en xl */}
          <div className="flex flex-col sm:flex-row xl:flex-col items-start sm:items-center xl:items-start">
            {item.icon && <span className="sm:mr-7 xl:mr-0 w-fit">{item.icon}</span>}

            {/* Contenedor para el título y el párrafo */}
            <div className="flex flex-col">
              {item.title && (
                <p className="text-[18px] font-extrabold jakartaFont mt-4 sm:mt-0 xl:mt-4">{item.title}</p>
              )}
              <p className="text-base leading-[28px] font-normal jakartaFont mt-2">{item.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostitGridAboutMe;
