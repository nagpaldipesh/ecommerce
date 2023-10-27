import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay, Navigation  } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation ]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/images/cta/cta2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="assets/images/cta/cta3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
