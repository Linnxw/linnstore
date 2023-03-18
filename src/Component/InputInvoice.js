import {FaFileInvoice} from "react-icons/fa"
export default function InputInvoice({iChange}){
  return(
    <div className="text-slate-200 font-sans flex flex-col items-center">
      <h2>Invoice Num:</h2>
      <div className="flex justify-center items-center">
        <div className="h-[32.3px] w-[36px] rounded-l bg-cream flex items-center justify-center text-slate-200">
         <FaFileInvoice/>
        </div>
        <input type="teks" placeholder="O979K57XXXX" className="outline-none py-1 px-3 w-[80%] rounded-r text-slate-800 focus:ring-1 focus:ring-cream" onChange={iChange}/>
      </div>
    </div>
    )
}