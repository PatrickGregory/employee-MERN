import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        // axios.post('http://localhost:8080/login',{email,password})
        axios.post('https://employee-mern-api1.vercel.app/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data ==='success'){
                navigate('/home')
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
           <form onSubmit={handleSubmit}>
                <h2>Log in</h2>
                <div className='mt-3'>
                    <label className='mb-2'>Email</label>
                    <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your E-mail'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Password</label>
                    <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
                </div>
                <button className='btn btn-success rounded-0 w-100 mt-2'>Log in</button>
                <p>Don't have an account?</p>
                <Link to={'/'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Sign Up</Link>
           </form>
        </div>
      </div>
    </div>
  )
}

