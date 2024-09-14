import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { menuBarHeight } from 'globalConfig';
import AboutMe from 'pages/AboutMe';
import TyrCase from 'pages/TyrCase';

function App() {
  return (
    <>
      <header
        style={{ height: `${menuBarHeight}px` }}
        className={`fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between px-4 z-50`}
      ></header>

      <main className="pt-[48px]">
        {/* Ajuste del padding top para compensar la altura del AppBar */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/tyr-case" element={<TyrCase />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
