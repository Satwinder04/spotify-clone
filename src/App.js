
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';
import Home from './components/Home';

function App() {
  return (     
    <BrowserRouter>
    <Routes>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/' element={<Front/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
