import {useNavigate} from "react-router-dom"
export default function Card({img,title}){
  const nvgt=useNavigate()
 const handleDirect=(m)=>{
   const string=m
   const result=string.replace(/\s/g,"")
   
    nvgt(`/topup/${result}`)
  }
  return (
    <div className="h-[140px] w-[100px] relative overflow-hidden bg-primary border-2 border-trit rounded-lg text-center md:h-[160px] md:w-[120px] hover:scale-105" onClick={()=>handleDirect(title)}>
      <div className="w-full">
       <img src={img} alt={title} className="w-full"/>
      </div>
      <div className="grid place-items-center font-inter text-[.7em] h-[30%] md:text-[.8em]">
       <p className="text-slate-200">{title}</p>
      </div>
    </div>
    )
}