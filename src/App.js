import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Home/intro';
import About from './pages/Home/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/client/src/pages/Home/intro.js" element={<Intro/>} />
        <Route path="/client/src/pages/Home/About.js" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
