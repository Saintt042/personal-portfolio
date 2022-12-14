import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Home/home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Mywork from './components/Mywork/Mywork';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mywork' element={<Mywork />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
