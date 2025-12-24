import React, { useState } from 'react'
import axios from 'axios'
import { loginSuccess } from '../Redux/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
  const dispatch =useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        'https://blog-backend-x2ci.onrender.com/login',
        formData
      )

      console.log("Login response:", res.data)
      alert(res.data.message)
if (res.data.success) {
  dispatch(loginSuccess({
    user:res.data.user,
    token:res.data.token
  })) 
  navigate('/')
}



    } catch (error) {
      console.error(error)
      alert("Login error")
    }
  }

  return (
    <div className='first-forms'>
            <h2 className='headregister'><span className='spanborder'>Log</span>in</h2>


      <form className='form-login' onSubmit={handleSubmit}>
        <input className='login-input'
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /><br />

        <input className='login-input'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /><br />

        <button className='btn-login' type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
