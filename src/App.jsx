
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home';
import Slider from './components/Slider';
import Contactus from './components/Contact Us/Contactus'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
