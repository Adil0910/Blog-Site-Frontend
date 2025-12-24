import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'
import Blog from './component/Blog'
import About from './component/About'
import Preloader from './Preloader'
import Addblog from './component/Addblog'
import BlogDetail from './component/BlogDetail'
import MyBlog from './component/MyBlog'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      {!loading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />

            <Route path="/myblog" element={
              <MyBlog/>}
             />



            <Route path="/addblog" element={
              <Addblog/>}
            />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App
