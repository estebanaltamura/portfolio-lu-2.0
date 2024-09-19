import Typo from 'components/Typo';
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

  return (
    <div className="w-full mx-auto">
      <img src="images/home/title.svg" alt="Home" className="w-full mt-24" />

      <div className="flex mt-12">
        <button
          onClick={scrollDownClickHandler}
          className="jakartaFont text-[29px] rounded-full border-8 border-black bg-[#CB76FF] text-black font-bold w-[287px] h-[97px] block mx-auto mt-9 wobble-horizontal"
        >
          See my work
        </button>
        <div className="flex flex-grow"></div>
        <p className="jakartaFont font-normal text-[12px] sm:text-[16px] w-full max-w-[430px] mt-10">
          * Lucía Rossini is a UX/UI designer that focuses on creating accesible and human experiences, where
          people feel safe and confident interacting with products they understand
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-44">
        <div className="cursor-pointer flex justify-center float" onClick={handleClickCase1}>
          <img src="/images/home/case1.svg" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center float" onClick={handleClickCase2}>
          <img src="/images/home/case2.svg" alt="" />
        </div>
        {/* <div className="cursor-pointer flex justify-center float" onClick={handleClickCase3}>
          <img src="/images/home/case3.svg" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center float" onClick={handleClickCase4}>
          <img src="/images/home/case4.svg" alt="" />
        </div> */}
      </div>

      {/* <p className="text-[37px] font-bold jakartaFont mt-16">Let&apos;s Collaborate</p> */}
    </div>
  );
};

export default Home;
