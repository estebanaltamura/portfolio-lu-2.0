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

  return (
    <div className="w-full mx-auto">
      <img src="images/home/title.svg" alt="Home" className="w-full mt-5" />
      <p className="jakartaFont font-normal text-[12px] sm:text-[18px] w-full max-w-[430px] mt-10">
        * Lucía Rossini is a UX/UI designer that focuses on creating accesible and human experiences, where
        people feel safe and confident interacting with products they understand
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-16">
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
