import React, { useState } from 'react'
import axios from "axios"
import { useSelector } from 'react-redux';
function Addblog() {


const {user,token} = useSelector((state)=>state.auth)  
console.log(user)

const [title ,settitle]=useState("");
const [content,setcontent]=useState("");
const [image,setimage]=useState("");

const handlesubmit = async (e) => {
  e.preventDefault();

  if (!token) {
    alert("Please login first");
    return;
  }

  try {
    const res = await axios.post(
      'https://blog-backend-x2ci.onrender.com/create-blog',
      { title, content, image },
      {
        headers: {
          Authorization: `Bearer ${token}` // ✅ yahi sahi hai
        }
      }
    );

    if (res.data.success) {
      alert("Blog Created Successfully");
      settitle("");
      setcontent("");
      setimage("");
    }
  } catch (error) {
    console.error("error creating blog", error);
  }
};

  return (
    <div className='main-create-blog'>
      <h2 className='head-create-blog'><span className='spanborder'>Cre</span>ate Blog</h2>
      <form className='form-create-blog' onSubmit={handlesubmit}>
        <input className='input-create' value={title} type='text' onChange={(e)=>settitle(e.target.value)} placeholder='Enter Your Title' required/>
        <input className='input-create' value={content} type='text' onChange={(e)=>setcontent(e.target.value)} placeholder='Enter Your Content' required/>
        <input className='input-create' value={image} type='text' onChange={(e)=>setimage(e.target.value)} placeholder='Enter Your Image Url' required/>
        <button className='create-btn' type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default Addblog
