import {IoIosArrowForward} from "react-icons/io"
import {useNavigate} from "react-router-dom"
export default function About(){
  const nvgt=useNavigate()
  return (
    <div className="px-4 mt-20 text-sans md:px-[100px]">
      <div className="font-semibold">
        <p className="text-2xl text-[#B09872]">Linnxw</p>
        <p className="text-[.9em] mt-3 text-[#FEFEFE]">
       Linnxw adalah tempat top up games yang aman, murah dan terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Payment terlengkap. Jika ada kendala silahkan klik logo CS pada kanan bawah di website ini.
        </p>
      </div>
      <div className="my-4 text-[.9em] font-semibold">
       <div>
        <p className="text-xl text-[#FEFEFE]">Menu</p>
       </div>
       <div className="ml-2">
         <div className="text-[#B09872] flex items-center mt-2" onClick={()=>nvgt("/")}><IoIosArrowForward/><p className="text-[#FEFEFE]">Home</p></div>
          <div className="text-[#B09872] flex items-center mt-2" onClick={()=>nvgt("/invoice")}><IoIosArrowForward/><p className="text-[#FEFEFE]">Search</p></div>
          <div className="text-[#B09872] flex items-center mt-2" onClick={()=>nvgt("/contact")}><IoIosArrowForward/><p className="text-[#FEFEFE]">Contact</p></div>
       </div>
      </div>
    </div>
    )
}