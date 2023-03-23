import { Routes, Route, Navigate } from 'react-router-dom';
import './sass/main.scss';

import Home from './pages/Home';
import Trybes from './pages/Trybes';
import Auspices from './pages/Auspices';
import Breeds from './pages/Breeds';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Gifts from './pages/Gifts';
import Login from './pages/Login';
import Friends from './pages/Friends';
import GarouNordeste from './pages/GarouNordeste';
import MatilhaDaKombi from './pages/MatilhaDaKombi';
import Menu from './pages/Menu';
import Rituals from './pages/Rituals';
import Info from './pages/Info';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to='/login' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/about" element={<About />} />
        <Route path="/trybes" element={<Trybes />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/auspices" element={<Auspices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/parceiros" element={<Friends />} />
        <Route path="/rituals" element={<Rituals />} />
        <Route path="/dons" element={<Gifts />} />
        <Route path="/garou-nordeste" element={<GarouNordeste />} />
        <Route path="/matilha-da-kombi" element={<MatilhaDaKombi />} />
        <Route path="/:tipo/:id" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
