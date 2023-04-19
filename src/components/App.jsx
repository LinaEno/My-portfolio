import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
