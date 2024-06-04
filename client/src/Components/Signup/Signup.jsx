import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting form with data:', { name, email, password });
    axios.post('http://localhost:3001/signup', { name, email, password })
    .then(result => {console.log(result)
      navigate('/login')
    })

      .catch(err => console.log(err))
  }
  
  return (
    <div className='box'>
      <h2 className="top">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Name' className='name' onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' className='email' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' className='password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="register-btn" type="submit">Register</button>
        <h5 className='already-acc'>Already have an account?</h5>
        <Link to="/login"><button className="login-btn">Login</button></Link>
      </form>
    </div>
  );
}

export default Signup;
