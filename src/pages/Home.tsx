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
      <img src="images/home/title.svg" alt="Home" className="rounded-[32px] w-[80%]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-10">
        <div className="cursor-pointer flex justify-center" onClick={handleClickCase1}>
          <img src="/images/home/case1.svg" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center" onClick={handleClickCase2}>
          <img src="/images/home/case2.svg" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center">
          <img src="/images/home/case3.svg" alt="" />
        </div>
        <div className="cursor-pointer flex justify-center">
          <img src="/images/home/case4.svg" alt="" />
        </div>
      </div>

      <p className="text-[37px] font-bold jakartaFont mt-16">Let&apos;s Collaborate</p>
    </div>
  );
};

export default Home;
