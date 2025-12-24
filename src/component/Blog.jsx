import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { setBlogs } from '../Redux/blogsSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function Blog() {
  const navigate =useNavigate()

  const dispatch = useDispatch();
  const blogs =useSelector((state)=> state.blogs.blogs);

  useEffect(() => {
    axios.get("https://blog-backend-x2ci.onrender.com/all-blog")
      .then(response => {
        if(response.data.success){
          dispatch(setBlogs(response.data.blogs));
        }
      })
      .catch(error => console.error("Error while fetching blogs:", error));
  }, [dispatch]);

  return (
    <>
    <div className="blog-container">
      <h1 className='blog-heading'><span className='borderspan'>Blo</span>gs</h1>
      {blogs.map((blog) => (
        <div onClick={()=>navigate(`/blog/${blog._id}`)} key={blog._id} className="scard">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className='content-blog'>
          <h2 className='bloghead'>{blog.title}</h2>
          <p className='blogpara1'>{blog.content}</p>
          <p className='blogpara2'>
  <strong>-</strong> {blog.author?.name || "Unknown Author"}
</p>
</div>
        </div>
      ))}
    </div>
      <Footer/>
    
    </>
  );
}

export default Blog;
