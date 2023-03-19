import {useState,useEffect} from "react"
import Navbar from "../Component/Navbar.js"
import Search from "../Component/Search.js"
import SwiperBanner from "../Component/Swiper.js"
import Content from "../Component/Content.js"
import About from "../Component/About.js"
import Footer from "../Component/Footer.js"
import Customer from "../Component/Customer"
import BtnScrollTop from "../Component/BtnScrollTop.js"
 import {useNavigate} from "react-router-dom"
export default function Home(){
  const [scroll,setScroll]=useState(false)
   const nvgt=useNavigate()
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
  const handleCustomer=()=>{
    nvgt("/contact")
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
    <Customer event={handleCustomer}/>
    </div>
    )
}