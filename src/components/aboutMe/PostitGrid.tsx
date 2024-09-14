const PostitGrid = ({ items }: { items: { header: string | JSX.Element; paragraph: string }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-y-16 gap-x-5 xl:gap-x-6 justify-center  max-w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5FF] w-full md:w-full xl:w-full h-full rounded-[20px] p-6 mx-auto md:max-w-full max-w-[345px]"
        >
          {/* Verificación si 'header' es string o JSX */}
          {typeof item.header === 'string' ? (
            <p className="text-[18px] font-extrabold jakartaFont">{item.header}</p>
          ) : (
            item.header
          )}
          <p className="text-[18px] font-normal jakartaFont mt-1">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default PostitGrid;
