
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { HashRouter ,Routes, Route} from "react-router-dom";
import Nopage from './pages/Nopage';
import About from './pages/About';

function App() {
  
  return (
    <div className="App">
    <HashRouter>
      <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/cart' exact element={<Cart/>} />
         <Route path='/about' exact element={<About/>} />
         <Route path='/*' exact element={<Nopage/>} />
      </Routes>
    </HashRouter>
      
    </div>
  );
}

export default App;
