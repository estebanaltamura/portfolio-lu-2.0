import {
  layoutMaxWidth,
  menuBarHeight,
  paddingLayoutBottomDesktop,
  paddingLayoutBottomMobile,
  paddingLayoutLeftRightDesktop,
  paddingLayoutLeftRightMobile,
  paddingLayoutTopDesktop,
  paddingLayoutTopMobile,
} from 'globalConfig';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isDesktop = window.matchMedia(`(min-width: ${layoutMaxWidth}px)`).matches;
  const paddingTop = menuBarHeight + (isDesktop ? paddingLayoutTopDesktop : paddingLayoutTopMobile);
  const paddingLeftRight = isDesktop ? paddingLayoutLeftRightDesktop : paddingLayoutLeftRightMobile;
  const paddingBottom = isDesktop ? paddingLayoutBottomDesktop : paddingLayoutBottomMobile;

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickAboutMe = () => {
    navigate('/about-me');
  };

  const handleClickResume = () => {
    const driveUrl = 'https://drive.google.com/file/d/1Mkhyhu2k3nldxi0AT0u9sl7LHM-L6g3a/view?usp=sharing';
    window.open(driveUrl, '_blank');
  };

  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/lucia-rossini-ux-ui-designer/', '_blank');
  };

  return (
    <>
      <header className="bg-[#F5F5FF] h-[52px] w-full">
        <div className="max-w-[1350px] mx-auto h-full flex items-center justify-between">
          <div className="flex space-x-8">
            <p className="cursor-pointer" onClick={handleClickHome}>
              Home
            </p>
            <p className="cursor-pointer" onClick={handleClickAboutMe}>
              About me
            </p>
          </div>

          <div className="flex-grow"></div>

          <div className="flex space-x-8">
            <p className="cursor-pointer" onClick={handleClickResume}>
              Resume
            </p>
            <p className="cursor-pointer" onClick={handleClickLinkedIn}>
              LinkedIn
            </p>
          </div>
        </div>
      </header>
      <div
        className="mx-auto w-full min-h-screen"
        style={{
          maxWidth: `${layoutMaxWidth}px`,
          padding: `${paddingTop}px ${paddingLeftRight}px ${paddingBottom}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
