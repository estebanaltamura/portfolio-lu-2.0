import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { menuBarHeight } from 'globalConfig';
import AboutMe from 'pages/AboutMe';
import TyrCase from 'pages/TyrCase';
import Abitab from 'pages/Abitab';
import { useEffect } from 'react';
import AOS from 'aos';
import { hotjar } from 'react-hotjar';
import 'aos/dist/aos.css';
import Properati from 'pages/Properati';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Inicializar Hotjar
    hotjar.initialize({ id: 5059946, sv: 6 });
  }, []);

  return (
    <>
      {/* Ajuste del padding top para compensar la altura del AppBar */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/tyr-case" element={<TyrCase />} />
        <Route path="/abitab" element={<Abitab />} />
        <Route path="/properati" element={<Properati />} />
      </Routes>
    </>
  );
}

export default App;
