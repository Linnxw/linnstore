import Card from "./Card.js"
import img1  from "../Aset/1671684860ezgif.com-gif-maker (35).jpg";
import img2 from "../Aset/a1.jpg"; 
import img3 from "../Aset/a2.jpg"; 
import img4 from "../Aset/a3.jpg"; 
import img5 from "../Aset/a4.jpg"; 
import img6 from "../Aset/a5.jpg"; 
import img7 from "../Aset/a6.jpg"; 
import img8 from "../Aset/a7.jpg"; 
import img9 from "../Aset/a8.jpg"; 
import img10 from "../Aset/aov.jpg"; 
import img11 from "../Aset/bal.jpg"; 
import img12 from "../Aset/cod.jpg"; 
import img13 from "../Aset/dragon.jpg"; 
import img14 from "../Aset/ff.jpg"; 
import img15 from "../Aset/hatsune.jpg"; 
import img16 from "../Aset/hoyo.jpg"; 
import img17 from "../Aset/jokiclasic.jpg"; 
import img18 from "../Aset/jokieceran.jpg"; 
import img19 from "../Aset/jokipaketan.jpg"; 
import img20 from "../Aset/la.jpg"; 
import img21 from "../Aset/lol.jpg"; 
import img22 from "../Aset/lom.jpg"; 
import img23 from "../Aset/mangaton.jpg"; 
import img24 from "../Aset/marvel.jpg"; 
import img25 from "../Aset/mihoyo.jpg"; 
import img26 from "../Aset/mobiku.jpg"; 
import img27 from "../Aset/naruto.jpg"; 
import img28 from "../Aset/origin2.jpg"; 
import img29 from "../Aset/origin3.jpg"; 
import img30 from "../Aset/omega.jpg"; 
import img31 from "../Aset/saitama.jpg"; 
import img32 from "../Aset/saus.jpg"; 
import img33 from "../Aset/tom.jpg"; 
export default function Content(){
  return (
    <>
   <div className="ml-4 md:mt-6 md:ml-[100px]">
     <h1 className="text-slate-200 text-xl md:text-2xl md:mb-2 font-semibold block mb-1">Top Up</h1>
     <span className="w-[70px] h-[4px] block rounded bg-cream md:w-[80px] md:h-[6px]"></span>
   </div>
    <div className="w-screen grid grid-cols-3 gap-1 px-4 md:grid-cols-6 md:px-[100px] self-center mt-[30px]">

      <Card img={img1} title={"Mobile legend Bang Bang"}/>
      <Card img={img17} title={" Joki Clasic"}/>
      <Card img={img18} title={" Joki Eceran"}/>
      <Card img={img19} title={"Joki Paketan"}/>
      <Card img={img2} title={"Valoran"}/>
      <Card img={img3} title={"Ragnarok M: Eternal Love"}/>
      <Card img={img4} title={"Light Of Thel"}/>
      <Card img={img5} title={"Hyper Front"}/>
      <Card img={img6} title={"Era Of Celestials"}/>
      <Card img={img7} title={"Never After"}/>
      <Card img={img8} title={"Laplace M"}/>
      <Card img={img9} title={"Sky Children of The Light"}/>
      <Card img={img10} title={"Arena of Valor Garena"}/>
      <Card img={img11} title={"Fottball Master 2"}/>
      <Card img={img12} title={"Call of duty Mobile"}/>
      <Card img={img13} title={"Dragon Raja"}/>
      <Card img={img14} title={"Free fire Batleground"}/>
      <Card img={img15} title={"Crossing Void"}/>
      <Card img={img16} title={"Genshin Impatct"}/>
      <Card img={img20} title={"Life After"}/>
      <Card img={img21} title={"League Of Legends: Wild Rift"}/>
      <Card img={img22} title={"Lord of Mobile"}/>
      <Card img={img23} title={"MangaToon"}/>
      <Card img={img24} title={"Marvel"}/>
      <Card img={img25} title={"Honkai Impact"}/>
      <Card img={img26} title={"Heaven Saga"}/>
      <Card img={img27} title={"Naruto Slugfest X"}/>
      <Card img={img28} title={"MU Origin 2"}/>
      <Card img={img29} title={"MU Origin 3"}/>
      <Card img={img30} title={"Omega Legend"}/>
      <Card img={img31} title={"One Puch Man"}/>
      <Card img={img32} title={"Sausage Man"}/>
      <Card img={img33} title={"Tom and jerry: Chase"}/>
    </div>
    </>
    )
}