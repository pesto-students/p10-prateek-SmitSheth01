import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';

function App() {

  
  return (

    
      <Router>
        <Navbar />
        <div className="container">
          {/* <nav>
            <ul>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
            </ul>
          </nav> */}
          

          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
      </Router>
      
  
  );
}

export default App;
