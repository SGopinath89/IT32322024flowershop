import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Cart from './components/Cart';
import Forgot from './components/Forgot';
import SignUp from './components/SignUp';
import Details from './components/Details';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/User' element={<User/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/ForgotPassword' element={<Forgot/>}/>
        <Route path='/Signup' element={<SignUp/>} />
        <Route path='/Details' element={<Details/>}/>
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
