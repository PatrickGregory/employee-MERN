import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [city,setCity] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((e)=>{
        e.preventDefault();
        // axios.post('http://localhost:8080/register',{name,email,age,city,password})
        axios.post('https://employee-mern-api1.vercel.app/register',{name,email,age,city,password})
        .then(res=>{
            console.log(res)
            navigate('/home')
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
                    <input type="text" required className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Email</label>
                    <input type="email" required className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your E-mail'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Age</label>
                    <input type="text" required className='form-control' onChange={(e)=>setAge(e.target.value)} placeholder='Your Age'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>City</label>
                    <input type="text" required className='form-control' onChange={(e)=>setCity(e.target.value)} placeholder='Your City of residence'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Password</label>
                    <input type="password" required className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
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

