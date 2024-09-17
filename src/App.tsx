import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { menuBarHeight } from 'globalConfig';
import AboutMe from 'pages/AboutMe';
import TyrCase from 'pages/TyrCase';
import Abitab from 'pages/Abitab';

function App() {
  return (
    <>
      <main className="pt-[48px]">
        {/* Ajuste del padding top para compensar la altura del AppBar */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/tyr-case" element={<TyrCase />} />
          <Route path="/abitab" element={<Abitab />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
