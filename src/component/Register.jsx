import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate= useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        'https://blog-backend-x2ci.onrender.com/register',
        formData
      )

      console.log("Backend response ", res.data)
      alert("Register Successful")
     navigate('/login')


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
    <div className='main-form-register'>
      <div className='first-form'>
<form onSubmit={handleSubmit}>
      <h2 className='headregister'><span className='spanborder'>Reg</span>ister</h2>

        <input className='register-input' name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input className='register-input' name="email" placeholder="Email" onChange={handleChange} /><br/>
        <input className='register-input' name="password" placeholder="Password" onChange={handleChange} /><br/>
        <button className='submitbtonregister' type="submit">Register</button>
    <button className='loginbtn' onClick={()=>navigate('/login')}>Login</button>

      </form>

      </div>

      </div>

    </div>
  )
}

export default Register
