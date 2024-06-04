import React, { useState } from 'react';
import './Login.css';  // Assuming Login.css is in the same folder as Login.jsx
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form with data:', { email, password });
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === 'success') {
                    navigate('/home');
                } else {
                    // Handle other responses (e.g., incorrect password, user not found)
                    console.log(result.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='box'>
            <h2 className="top">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>      
                    <input 
                        type="email" 
                        placeholder='Enter Email' 
                        className='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />  
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>      
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        className='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />  
                </div>

                <button type="submit" className='login-btn'>Login</button>
                <h5 className='already-acc'>Already have an account?</h5>  
                <Link to="/signup"><button type="button" className='register-btn'>Register</button></Link>
            </form>
        </div>
    );
}

export default Login;
