import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './components/pages/Homes';
import Services from './components/pages/Services';
import { SignUp } from './components/pages/SignUp';
import { Product } from './components/pages/Product';
function App() {
  return (
    <div className="App">
      <h1>james</h1>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component=
          { Homes }/>
          <Route path='/services' exact Component=
          { Services }/>
          <Route path='/signup' exact Component=
          { SignUp }/>
          <Route path='/products' exact Component=
          { Product }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
