import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Reset from './components/Reset';
import Product from './components/Product';
import Register from './components/Register';
import Forget from './components/Forget';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/product" element={<Product />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
