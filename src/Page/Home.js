import {useState,useEffect} from "react"
import Navbar from "../Component/Navbar.js"
import Search from "../Component/Search.js"
import SwiperBanner from "../Component/Swiper.js"
import Content from "../Component/Content.js"
import About from "../Component/About.js"
import Footer from "../Component/Footer.js"
import BtnScrollTop from "../Component/BtnScrollTop.js"
export default function Home(){
  const [scroll,setScroll]=useState(false)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>150){
        setScroll(true)
      }else{
        setScroll(false)
      }
    } )
  },[])
  
  const handleScrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="bg-second h-full w-full">
      <Navbar/>
      <SwiperBanner/>
      <Search/>
      <Content/>
      <About/>
      <Footer/>
      {
        scroll && <BtnScrollTop event={handleScrollTop}/>
      }
    
    </div>
    )
}