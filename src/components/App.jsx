import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from 'pages/Home';
// import About from 'pages/About';
import Projects from 'pages/Projects';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}

export default App;
