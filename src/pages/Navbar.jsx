import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/authSlice'
function Navbar() {
  const [open,setopen] =useState(false)

  const dispatch = useDispatch()
  const navigate =useNavigate()
  const isAuth = useSelector((state)=>state.auth.isAuth)

  const handlelogout = () =>{
    dispatch (logout())
    navigate('/')
    setopen(false)
  }


  return (
    <nav>
      <div className='logo'><h1 className='logos'>NEXO</h1><img className='logoimg' src='image/blog.jpeg'/></div>
        <button className='hamburgr'onClick={()=>setopen(!open)}>☰</button>

      <div className={`navlink ${open ? "open":""}`}>
        <Link to="/" onClick={()=>setopen(false)}>HOME</Link>
        <Link to="/blog" onClick={()=>setopen(false)}>BLOG</Link>
        <Link to="/about" onClick={()=>setopen(false)}>ABOUT</Link>
        {isAuth && <Link to="/myblog" onClick={()=>setopen(false)}>MY BLOG</Link>}
        {isAuth &&<Link to="/addblog" onClick={()=>setopen(false)}>CREATE-BLOG</Link>}
        {! isAuth && <Link to="/register" onClick={()=>setopen(false)}>REGISTER</Link>}
        {isAuth && <button className='logout-button' onClick={handlelogout}>LOGOUT</button>}

       </div>


    </nav>
  )
}

export default Navbar
