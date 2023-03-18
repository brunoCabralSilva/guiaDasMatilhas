import { Routes, Route } from 'react-router-dom';
import './sass/main.scss';

import Home from './pages/Home';
import Trybes from './pages/Trybes';
import Auspices from './pages/Auspices';
import Breeds from './pages/Breeds';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Rituals from './pages/Rituals';
import Footer from './components/Footer';
import GarouNordeste from './pages/GarouNordeste';
import MatilhaDaKombi from './pages/MatilhaDaKombi';
import Menu from './pages/Menu';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/about" element={<About />} />
        <Route path="/trybes" element={<Trybes />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/auspices" element={<Auspices />} />
        <Route path="/rituals" element={<Rituals />} />
        <Route path="/garou-nordeste" element={<GarouNordeste />} />
        <Route path="/matilha-da-kombi" element={<MatilhaDaKombi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
