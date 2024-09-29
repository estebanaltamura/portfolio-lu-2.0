import Header from 'components/header';
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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isDesktop = window.matchMedia(`(min-width: ${layoutMaxWidth}px)`).matches;
  const paddingTop = isDesktop ? paddingLayoutTopDesktop : paddingLayoutTopMobile;
  const paddingLeftRight = isDesktop ? paddingLayoutLeftRightDesktop : paddingLayoutLeftRightMobile;
  const paddingBottom = isDesktop ? paddingLayoutBottomDesktop : paddingLayoutBottomMobile;
  const path = window.location.pathname;

  useEffect(() => {
    scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Header />
      <main
        className="mx-auto w-full min-h-screen"
        style={{
          maxWidth: `${layoutMaxWidth}px`,
          padding: `${paddingTop + menuBarHeight}px ${paddingLeftRight}px ${paddingBottom}px`,
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
