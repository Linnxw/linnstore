import {useState} from "react"
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineContactSupport} from 'react-icons/md'
import {BiHomeAlt} from 'react-icons/bi'
import {useNavigate} from "react-router-dom"
export default function Navbar(){
  const [toggle,setToggle]=useState(false)
  const nvgt=useNavigate()
  const handleToggle=()=>{
    setToggle(state=>!state)
  }
 
  return(
    <>
    <div className="h-[60px] w-screen flex justify-between items-center bg-[#212529] font-inter p-3 md:h-[80px] z-22 mb-[15px] shadow-lg shadow-[#1F2227]">
    <div>
      <h1 className="text-[#B09872] font-semibold text-2xl">Linnxw</h1>
    </div>

      <div className="buger-menu flex flex-col items-center justify-between h-5 w-6 group cursor-pointer md:hidden" onClick={handleToggle}>
      <span className={toggle?"block h-1 bg-slate-300 rounded-lg w-6 group-hover:rotate-[41deg] origin-left ease-in-out duration-150":"block h-1 bg-slate-300 rounded-lg w-6"}></span>
      <span className={toggle?"block h-1 bg-slate-300 rounded-lg w-6 group-hover:hidden ease-in-out duration-150":"block h-1 bg-slate-300 rounded-lg w-6"}></span>
      <span className={toggle?"block h-1 bg-slate-300 rounded-lg w-6 group-hover:-rotate-[42deg] origin-left ease-in-out duration-150":"block h-1 bg-slate-300 rounded-lg w-6 rotate-0"}></span>
      </div>
      <div className="hidden md:inline-block md:w-2/4">
           <div className="inline-block w-full bg-red flex justify-around text-slate-300 text-md">
       <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/")}>
      <BiHomeAlt/>
      <p className="mx-1">Home</p>
     </div>
     <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/invoice")}>
      <AiOutlineSearch/>
      <p className="mx-1">Seach invoice</p>
     </div>
     <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/contact")}>
      <MdOutlineContactSupport/>
      <p className="mx-1">Contact</p>
     </div>
           </div>
      </div>
    </div>
    <div className={toggle ? "absolute h-[100px] w-screen flex flex-col justify-around font-inter pl-3 bg-primary text-slate-300 top-[60px] text-md z-20" :"absolute h-[100px] w-screen font-inter flex flex-col justify-around pl-8 bg-slate-800 -top-[100px] -z-2 text-md"}>
     <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/")}>
      <BiHomeAlt/>
      <p className="mx-1">Home</p>
     </div>
     <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/invoice")}>
      <AiOutlineSearch/>
      <p className="mx-1">Seach invoice</p>
     </div>
     <div className="flex items-center cursor-pointer hover:text-slate-200" onClick={()=>nvgt("/contact")}>
      <MdOutlineContactSupport/>
      <p className="mx-1">Contact</p>
     </div>
    </div>
    </>
    )
}