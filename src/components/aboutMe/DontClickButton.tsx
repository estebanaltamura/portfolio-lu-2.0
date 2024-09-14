const DontClickButton = ({
  setConfettiVisible,
}: {
  setConfettiVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const confettiHandler = () => {
    setConfettiVisible(true);

    // Ocultar el confetti después de algunos segundos
    setTimeout(() => {
      setConfettiVisible(false);
    }, 3500); // Confetti visible por 7 segundos
  };

  return (
    <div className="relative w-full h-16 flex items-center justify-center mt-16">
      <div className="relative inline-block w-full max-w-[348px]">
        {/* Sombra amarilla */}
        <div className="absolute top-2 left-2 w-full h-[61px] bg-yellow-300 rounded-lg transition-transform duration-300 ease-out-back"></div>

        {/* Botón */}
        <button
          onClick={confettiHandler}
          className="relative z-10 w-full h-[61px] border border-gray-500 rounded-lg flex items-center justify-center bg-transparent text-black font-semibold transition-transform duration-300 ease-out-back hover:translate-x-2 hover:translate-y-2"
        >
          Don&apos;t click this button
        </button>
      </div>
    </div>
  );
};

export default DontClickButton;
