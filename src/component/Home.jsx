import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
function Home() {
  const navigate = useNavigate()
const [load,setload]=useState(true)
const [blogs,setblogs]=useState([])

useEffect(() => {
    axios.get('https://blog-backend-x2ci.onrender.com/all-blog')
      .then(res => {
        if (res.data.success) {
          setblogs(res.data.blogs)
        }
      })
      .catch(err => {
        console.error("Error fetching blogs", err)
      })
      .finally(() => {
        setload(false)
      })
  }, [])
if(load){
  return <p className='loadmessage'>Loading Recents Posts...</p>
}

  const recentpost = [...blogs].slice(-3);



  return (
    <div className='Main-Container'>
      <div className='page1'>

        <div className='page1-content'>
        <div style={{width:"50%",minHeight:"100vh"}} className='img-box'>
          <img className='image1' src='image/white2.jpg'/>
          </div>
        <div style={{width:"50%",height:"100vh"}} className='box-card1'>
          <h3 className='head3'>My Thoughts</h3>
          <div className='card1'>
            <img className='cardimg' src='image/image2.jpg'/>
            <div className='title-content'>
            <h3 className='head1'>Detoxing my social media feed</h3>
            <p className='para1'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
          </div></div>

        </div>
        </div>








      </div>
      <div className='page2'>
        <div className='boxead'>
   <h1 className='header-page2'><span className='borderspan'>Rese</span>nts Posts</h1></div>

<div className='main-page2'>

{
  recentpost.map((p)=>(
    <div onClick={()=>navigate(`/blog/${p._id}`)} key={p._id} className='card2'>
  <div className='image2cards'>
      <img className='image-page2-1' src={p.image}/></div>
      <div className='title-page2' >
        <h1 className='headerhome'>{p.title}</h1>
      <p>{p.content.slice(0, 80)}...</p>
      <p><b>—</b> {p.author?.name}</p>
      </div>
      



    </div>
  ))
}








{/* <div className='card2'>
  <div className='image2cards'>
<img className='image-page2' src='image/Models.jpeg'/>
  </div>
  <div className='title-page2'>
    <p>May 1, 2023 2 min read</p>
    <h1>The one thing I would tell to my 16 year old self</h1>
<p className='paratitle-p2'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
  </div>
</div>

<div className='card2'>
  <div className='image2cards'>
<img className='image-page2' src='image/white.jpg'/>
  </div>
  <div className='title-page2'>
    <p>May 1, 2023 2 min read</p>
    <h1>The one thing I would tell to my 16 year old self</h1>
<p className='paratitle-p2'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
  </div>
</div>
<div className='card2'>
  <div className='image2cards'>
<img className='image-page2' src='image/song.jpeg'/>
  </div>
  <div className='title-page2'>
    <p className='paratitle-p2'>May 1, 2023 2 min read</p>
    <h1>The one thing I would tell to my 16 year old self</h1>
<p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
  </div>
</div> */}

</div>

      </div>
      <div className='page3'>
<div className='main-page3'>
      <div style={{height:"130vh",width:"50%"}} className='box1'>
 <div className='image1-box3s'>
    <img className='image1-box3' src='image/image1.jpg'/>
</div>
      </div>


      <div style={{height:"130vh",width:"50%"}} className='box1ss'>
          <div className='text-page3'>
    <p className='page3-text'>” I always get to where I’m going by walking away from where I have been.”</p>
    <p className='name-author'> ― Winnie the Pooh, A.A. Milne</p>
   {/* <div className='button-box'>
    <button className='btnexplore'>EXPLORE</button>

   </div> */}
  </div>
      </div>
</div>
      </div>
      

      <Footer/>
    </div>
  )
}

export default Home
