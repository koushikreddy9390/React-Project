// import React, { useState } from 'react';
// import { assets } from '../../assest/asset/assets';
// import  "./login.css"

// export default function Login({ setShowLogin }) {
//     const [current, setCurrent] = useState("Sign Up");

//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container'>
//                 <div className='login-pop-title'>
//                     <h2>{current}</h2>
//                     <img 
//                         onClick={() => setShowLogin(false)} 
//                         src={assets.cross_icon} 
//                         alt='Close' 
//                         className='close-icon'
//                     />
//                 </div>
//                 <div className='login-popup-inputs'>
//                     {current === "Sign Up" && (
//                         <input 
//                             type='text' 
//                             placeholder='Your Name' 
//                             name='name' 
//                             required 
//                         />
//                     )}
//                     <input 
//                         type='email' 
//                         placeholder='Your Email' 
//                         name='email' 
//                         required 
//                     />
//                     <input 
//                         type='password' 
//                         placeholder='Password' 
//                         name='password' 
//                         required 
//                     />
//                 </div>
//                 <button type='submit'>
//                     {current === "Sign Up" ? "Create Account" : "Login"}
//                 </button>
//                 <div className='login-pop-condition'>
//                     <label>
//                         <input 
//                             type='checkbox' 
//                             required 
//                         />
//                         By continuing, I agree to the terms of use & privacy policy.
//                     </label>
//                 </div>
//                 {current === "Login" ? (
//                     <p>
//                         Create a new account? 
//                         <span onClick={() => setCurrent("Sign Up")}> Sign Up</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Already have an account? 
//                         <span onClick={() => setCurrent("Login")}> Login</span>
//                     </p>
//                 )}
//             </form>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { assets } from '../../assest/asset/assets';
import "./login.css";

export default function Login({ setShowLogin }) {
    const [current, setCurrent] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current === "Sign Up") {
            handleSignUp();
        } else {
            handleLogin();
        }
    };

    const handleSignUp = () => {
        const { name, email, password } = formData;
        if (name && email && password && formData.termsAccepted) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email) {
                alert("Email already registered. Please use a different email.");
            } else {
                localStorage.setItem('user', JSON.stringify({ name, email, password }));
                alert("Registration successful!");
                setCurrent("Login");
            }
        } else {
            alert("Please fill all fields and accept the terms.");
        }
    };

    const handleLogin = () => {
        const { email, password } = formData;
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            setShowLogin(false);
            // Perform further login actions here (e.g., redirect, set auth state)
        } else {
            alert("Invalid email or password.");
        }
    };

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleSubmit}>
                <div className='login-pop-title'>
                    <h2>{current}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt='Close'
                        className='close-icon'
                    />
                </div>
                <div className='login-popup-inputs'>
                    {current === "Sign Up" && (
                        <input
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>
                    {current === "Sign Up" ? "Create Account" : "Login"}
                </button>
                {current === "Sign Up" && (
                    <div className='login-pop-condition'>
                        <label>
                            <input
                                type='checkbox'
                                name='termsAccepted'
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                required
                            />
                            By continuing, I agree to the terms of use & privacy policy.
                        </label>
                    </div>
                )}
                {current === "Login" ? (
                    <p>
                        Create a new account?
                        <span onClick={() => setCurrent("Sign Up")}> Sign Up</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?
                        <span onClick={() => setCurrent("Login")}> Login</span>
                    </p>
                )}
            </form>
        </div>
    );
}
