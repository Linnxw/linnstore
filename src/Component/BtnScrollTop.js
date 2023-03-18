import {BsFillArrowUpSquareFill} from "react-icons/bs"
export default function BtnScrollTop({event}){
  return (
    <div className="h-10 w-10 text-5xl rounded-lg text-[#BE4CAE] fixed bottom-10 left-8 bg-slate-200">
    <div onClick={event}>
      <BsFillArrowUpSquareFill/>
    </div>
    </div>
    )
}