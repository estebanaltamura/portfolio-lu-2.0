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
    <button
      onClick={confettiHandler}
      className="jakartaFont text-[29px] rounded-full border-4 border-black bg-[#CB76FF] text-black font-semibold px-9 py-4 block mx-auto mt-9"
    >
      Don&apos;t click me
    </button>
  );
};

export default DontClickButton;
