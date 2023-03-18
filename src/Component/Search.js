import {AiOutlineSearch} from 'react-icons/ai'
export default function Search(){
  return (
    <div className="w-screen h-[50px] flex items-center justify-center my-3 font-sans">
     <input type="teks" placeholder="Search product..." className="border-none py-1 px-3 w-[80%] rounded-l focus:outline-none text-slate-800"/>
     <button className="h-[32.3px] w-[36px] rounded-r bg-cream flex items-center justify-center text-slate-200 -z-1"><AiOutlineSearch/></button>
    </div>
    )
}