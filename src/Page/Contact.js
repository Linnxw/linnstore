import Navbar from "../Component/Navbar"
import About from "../Component/About"
import Footer from "../Component/Footer"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
export default function Contact(){
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_988e4zd', 'template_zqnal56', form.current, 'fVpS8_9x_mHYfHTaK')

      .then((result) => {
          console.log(result.text);
          if(result.text==="OK"){
           Swal.fire(
            'Pesan terkirim!',
            'Terimakasih atas tanggapan anda',
            'success'
          )
            e.target.reset()
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="bg-second w-screen h-full md:h-screen md:relative">
    <Navbar/>
    <div className="mt-20 w-[100%] flex flex-col items-center">
    <div className="text-slate-200 font-inter text-2xl">
     <h1>Contact me?</h1>
    </div>
    <div className="w-[90%] h-full font-sans">
      <form 
      className="w-[100%] md:w-[70%] h-[250px] md:h-[400px] md:mt-20 mx-auto flex flex-col items-center justify-evenly" 
      ref={form}
      onSubmit={sendEmail}>
        <input
        type="teks"
        placeholder="input your name"
        className="outline-none py-1 px-2 text-slate-700 bg-slate-200 border-none w-[100%] md:py-2 rounded m-2"
        name="user_name"/>
        <input
        type="email"
        placeholder="input your Email" 
        className="outline-none py-1 px-2 text-slate-700 bg-slate-200 border-none w-[100%] rounded m-2 invalid:ring-1 invalid:ring-red-500 md:py-2"
        name="user_email"/>
        <textarea
        placeholder="input ypur messege" 
        className="outline-none py-1 px-2 text-slate-700 bg-slate-200 border-none w-[100%] rounded m-2 md:py-2"
        name="message"/>
         <button className="py-2 px-3 md:w-[100%] hover:scale-95 md:text-center text-slate-200 font-semibold bg-cream text-center rounded" value="Send">Send</button>
      </form>
    </div>
    </div>
    <div className="md:absolute md:bottom-9">
    <About/>
    </div>
    <div className="md:absolute md:bottom-0">
      <Footer/>
    </div>

    </div>
    )
}