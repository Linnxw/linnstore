import cs from "../Aset/callcenter (1).png"
export default function Customer({event}){
  return(
    <div className="h-12 fixed bottom-12 right-6 bg-slate-200 flex items-center justify-center rounded-full md:h-15 md:bottom-20 md:right-10" onClick={event}>
     <img src={cs} alt="cs" className="h-[100%]"/>
    </div>
    )
}