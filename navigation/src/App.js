import './App.css';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  const loc = window.location.pathname;
  return (
    <div className='container'>
      <ul className='navbar'>
        <li>
          <Link reloadDocument className={loc == "/" ? "bg-body-secondary text-white " : ""} to="/">Home</Link>
        </li>
        <li>
          <Link reloadDocument className={loc == "/about" ? "bg-body-secondary text-white " : ""} to="/about">About</Link>
        </li>
        <li>
          <Link reloadDocument className={loc == "/contact" ? "bg-body-secondary text-white " : ""} to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
