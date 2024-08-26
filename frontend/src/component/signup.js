import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/register',{name,email,password})
        .then(res=>{
            console.log(res)
            navigate('/login')
        })
        .then(err=>console.log(err))
    })
  return (
    <div>
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
           <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className='mt-2'>
                    <label className='mb-2'>Name</label>
                    <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Email</label>
                    <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your E-mail'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Password</label>
                    <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
                </div>
                <button className='btn btn-success rounded-0 w-100 mt-2'>Register</button>
                <p>Have an account?</p>
                <Link to={'/login'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Login</Link>
           </form>
        </div>
      </div>
    </div>
  )
}
