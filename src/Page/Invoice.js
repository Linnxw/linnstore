import Navbar from "../Component/Navbar.js"
import About from "../Component/About.js"
import Footer from "../Component/Footer.js"
import Swal from 'sweetalert2'
import {useState} from "react"
import CardInvoice from "../Component/CardInvoice.js"
export default function Invoice(){
  const [input,setInput]=useState("")
  const handleCheck=()=>{
    if(input.length > 7){
      Swal.fire(
        'invoice not found',
        'Is your invoice number correct?'
     )
    }else{
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Invoice number minimum 8 length',
})
    }
  }
  const handleChange=({target})=>{
    setInput(target.value)
  }
  return (
    <div className="bg-second h-full md:h-screen w-screen md:flex md:justify-between md:flex-col">
    <Navbar/>
    <CardInvoice event={handleCheck} iChange={handleChange}/>
     <div className="hidden md:block md:h-[150px]"></div>
     <div className="hidden md:block md:h-[150px]"></div>
  <div className="hidden md:block md:h-[150px]"></div>
     <div className="hidden md:block md:h-[150px]"></div>
  <div className="hidden md:block md:h-[150px]"></div>
     <div className="hidden md:block md:h-[150px]"></div>
    <About/>
    <Footer/>
    </div>
    )
}