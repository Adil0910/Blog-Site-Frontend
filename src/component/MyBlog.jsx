import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

function MyBlog() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const [blogs, setblogs] = useState([])
  const [loading, setloading] = useState(true)

  // EDIT STATES
  const [editBlog, setEditBlog] = useState(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    if (!user) return

    axios
      .get(`https://blog-backend-x2ci.onrender.com/user/${user._id}/blogs`,{
         headers: {
      Authorization: `Bearer ${user.token}`
    }
      })
      .then(res => {
        if (res.data.success) {
          setblogs(res.data.blogs)
        }
      })
      .catch(err => console.error("error", err))
      .finally(() => setloading(false))
  }, [user])

  if (loading) {
    return <p>Loading...</p>
  }

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return

    try {
      const res = await axios.delete(`https://blog-backend-x2ci.onrender.com/blog/${id}`,{
         headers: {
      Authorization: `Bearer ${user.token}`
    }
      })
      if (res.data.success) {
        setblogs(prev => prev.filter(blog => blog._id !== id))
      }
    } catch (err) {
      console.error("Delete error", err)
    }
  }

  // OPEN EDIT
  const openEdit = (blog) => {
    setEditBlog(blog)
    setTitle(blog.title)
    setContent(blog.content)
    setImage(blog.image)
  }

  const handleUpdate = async () => {
  try {
    const res = await axios.put(
      `https://blog-backend-x2ci.onrender.com/blog/${editBlog._id}`,
      { title, content, image },         
      {
        headers: {
          Authorization: `Bearer ${user.token}` 
        }
      }
    )

    if (res.data.success) {
      setblogs(prev =>
        prev.map(b =>
          b._id === editBlog._id ? res.data.message : b
        )
      )
      setEditBlog(null)
    }
  } catch (err) {
    console.error("Update error", err)
  }
}

  return (<>
    <div className='my-blogcontainer'>
      <h2 className='head2'>
        <span className='spanborder'>My B</span>logs ({blogs.length})
      </h2>

      <p className='message' onClick={() => navigate('/addblog')}>
        Add-Blog
      </p>

      {blogs.length === 0 && (
        <p>You Have Not Created Any Blog</p>
      )}
        <div className='main-blog-my'>

      {blogs.map(blog => (
        <div key={blog._id} className='scards'>
          <img className='img-my-blog' src={blog.image} />
          <div className='item-pad'>
          <h3>{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>

          {/* ACTION BUTTONS */}
          <div className="blog-actions">
            <button className='crud' onClick={() => openEdit(blog)}>Edit</button>
            <button className='crud-del' onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
</div>
          {/* EDIT FORM (SAME CARD) */}
          {editBlog?._id === blog._id && (
            <div className="edit-form">
              <input className='title-edit'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />

              <textarea className='title-edits'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
              />

              <input className='title-edit'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />

              <button className='btncrud' onClick={handleUpdate}>Update</button>
              <button className='btncrud-can' onClick={() => setEditBlog(null)}>Cancel</button>
            </div>
            
          )}
        </div>
      ))}</div>
    </div>
    <Footer/>
    </>
  )
}

export default MyBlog
