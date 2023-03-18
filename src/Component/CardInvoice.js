import InputInvoice from "../Component/InputInvoice.js"
export default function CardInvoice({event,iChange}){
  return (
  
       <div className="w-[95%] h-[180px] mt-[20px] mx-auto rounded-lg bg-primary border-2 border-trit shadow-lg shadow-trit font-sans  overflow-hidden">
         <div className="border-bottom-2 border-trit h-1/4 w-[100%]  flex items-center ml-4 text-slate-200 font-semibold">
           <h1>Cek invoice</h1>
         </div>
         <div className="h-3/4 mx-auto">
           <div className="h-3/5 w-[100%] flex justify-center items-center">
            <InputInvoice iChange={iChange}/>
           </div>
           <div className="h-2/5 w-[100] flex justify-end text-semibold text-slate-200">
             <button className="mr-[16px] mt-1 px-2 h-[35px] bg-cream rounded" onClick={event}>Check</button>
           </div>
         </div>
       </div>
    
    )
}