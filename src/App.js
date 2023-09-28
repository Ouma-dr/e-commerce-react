
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Nopage from './pages/Nopage';
import About from './pages/About';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/cart'  element={<Cart/>} />
         <Route path='/about'  element={<About/>} />
         <Route path='/*'  element={<Nopage/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
