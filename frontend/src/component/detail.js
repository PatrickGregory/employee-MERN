import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const {id} = useParams()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [city,setCity] = useState()

    useEffect(()=>{
        // axios.get('http://localhost:8080/getuser/'+id)
        axios.get('https://employee-mern-api1.vercel.app/getuser/'+id)
        .then(res => {
            console.log(res)
            setName(res.data.name)
            setEmail(res.data.email)
            setAge(res.data.age)
            setCity(res.data.city)
        })
        .catch(err => console.log(err))
    },[])

    
  return (
    <div>
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
           <form>
                <h2>User Details</h2>
                <div className='mt-2'>
                    <label className='mb-2'>Name</label>
                    <input type="text" className='form-control' disabled onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your name'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Email</label>
                    <input type="email" className='form-control' disabled onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your E-mail'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Age</label>
                    <input type="text" className='form-control' disabled onChange={(e)=>setAge(e.target.value)} value={age} placeholder='Your Age'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>City</label>
                    <input type="text" className='form-control' disabled onChange={(e)=>setCity(e.target.value)} value={city} placeholder='Your City of residence'/>
                </div>
                {/* <div className='mt-3'>
                    <label className='mb-2'>Password</label>
                    <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
                </div> */}
                <Link to={`/update/${id}`} className='btn btn-primary rounded-0 w-100 mt-2'>Update</Link>
                <Link to={`/home`} className='btn btn-success rounded-0 w-100 mt-2'>Home</Link>
               </form>
        </div>
      </div>
    </div>
  )
}

