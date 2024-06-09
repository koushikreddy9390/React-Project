import React, { useContext, useState } from 'react'
import { assets } from '../../assest/asset/assets';
import  {Link}  from "react-router-dom"


import "./Navbar.css"  ;
import { StoreContext } from '../Context/StoreContext';




export default function Navbar({setShowLogin}) {

    const[menu,setMenu]=useState("menu");


    const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to="/"><img  src={assets.Delivery} alt=''   className='logo'/></Link>
        <ul   className='navbar-menu'>
            <Link to="/"   onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a  href='#Explore-menu'   onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download'     onClick={()=>setMenu("Mobile")} className={menu==="Mobile"?"active":""}>Mobile</a>
            <a href='#footer'  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>

        </ul>
        <div className='navbar-right'>
        
            <div  className='navbar-search-icon'>
                <Link to="/cart"><img  src={assets.basket_icon} /></Link>
                <div  className={getTotalCartAmount()===0?"":"dot"}></div>

            </div>

            <button  onClick={()=>setShowLogin(true)}>sign-in</button>

        </div>
        
      
    </div>
  )
}