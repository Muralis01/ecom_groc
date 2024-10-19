import React from 'react'
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import Home from './pages/Home';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import Login from './components/Login1';
// import Signup from './pages/Signup';
import Signup1 from './components/Signup1';
import Forgot from './pages/Forgot';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup1/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/*" element={<NoPage/>} /> 
      </Routes>
    </Router>
    {/* <Signup1/> */}
    </div>
  )
}

export default App