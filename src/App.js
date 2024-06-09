import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import AppDownload from './components/AppDownload/AppDownload';
import { useState } from 'react';
import Login from './components/Login/Login';

function App() {



  const[showLogin,setShowLogin]=useState(false);
  return (

    <>

{showLogin?<Login  setShowLogin={setShowLogin}/>:<></>}
<div >


<Navbar   setShowLogin={setShowLogin}/>


<Routes   >
  <Route path='/'  element={<Home/>}/>
  <Route path='/Cart'  element={<Cart/>}/>
  <Route path='/order'  element={<PlaceOrder/>}/>
</Routes>

<Footer/>


</div>
    </>
    
  );
}

export default App;
