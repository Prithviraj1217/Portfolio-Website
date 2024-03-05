import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/Home';
import Loader from './components/Loader';
import Intro from './pages/Home/intro';
import About from './pages/Home/About';

function App() {
  const [showLoading , setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/client/src/pages/Home/intro.js" element={<Intro/>} />
        <Route path="/client/src/pages/Home/About.js" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
