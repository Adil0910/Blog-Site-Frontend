import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Footer from './Footer';


function BlogDetail() {
    const {id}=useParams();
    const [blog,setblog]=useState(null);
useEffect(()=>{
axios.get(`https://blog-backend-x2ci.onrender.com/blog/${id}`)
.then(res=>{
    if(res.data.success){
        setblog(res.data.blog);
    }
}).catch(err=>{
    console.error(err)
})
},[id]);

if(!blog){
    return <p>Loading...</p>
}
  return (
    <>
    <div className='blog-detail'>
       <div className='image2cards'>
      <img className='image-page2-1' src={blog.image}/></div>
      <div className='title-page2' >
        <h1 className='headerhome'>{blog.title}</h1>
      <p>{blog.content}...</p>
      <p><b>—</b> {blog.author?.name}</p>
      </div>
    </div>
      <Footer/>

    </>
  )
}

export default BlogDetail
