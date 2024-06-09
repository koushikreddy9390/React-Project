import React from 'react'
import { assets } from '../../assest/asset/assets';


import "./Footer.css"

export default function Footer() {
  return (

    <div   className='footer'  id='footer'>
        <div   className='footer-content'  >
        <div  className='footer-content-left'>
<img src={assets.Delivery}/>
<p>lorem ipsum </p>

<div  className='footer-social-icons'>
<img src={assets.facebook_icon}/>
<img src={assets.twitter_icon}/>
<img src={assets.linkedin_icon}/>
</div>
        </div>

        <div  className='footer-content-center'>
            <h2>DeliverGrub </h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div  className='footer-content-rigth'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+98763521320</li>
                <li>contact@DeliverGrub.com</li>
            </ul>

        </div>
      
    </div>
    <hr></hr>
    <p className='footer-copyright'>copyright  2024  @  DeliverGrub.com - All Right   Reserved</p>

    </div>
    
  )
}
