import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader/Loader';

const Projects = lazy(() => import('pages/Projects'));
const Home = lazy(() => import('pages/Home'));

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
