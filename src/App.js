import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Cards from './components/Cards';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/reviews';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/movies' element={<Cards />} />
        </Routes>

    </>
  );
}

export default App;





