import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trybes from './pages/Trybes';
import Auspices from './pages/Auspices';
import Breeds from './pages/Breeds';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import './sass/main.scss';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trybes" element={<Trybes />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/auspices" element={<Auspices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
