import { Navigation, Pagination,Autoplay} from 'swiper';
import Banner1 from "../Aset/20230305_075748.jpg"
import Banner2 from "../Aset/20230305_080558.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
export default function SwiperBanner(){
  return (
    <Swiper style={{
      '--swiper-navigation-color':'#fff',
      '--swiper-pagination-color':'#fff',
    }}
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:2500}}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={Banner1} alt="banner1"/></SwiperSlide>
     <SwiperSlide><img src={Banner2} alt="banner2"/></SwiperSlide>
      
    </Swiper>
  );
};