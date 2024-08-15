import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const Category = () => {
  return (
    <section>
      <SectionTittle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
          verticalClass:true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mx-auto m-12"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-3xl uppercase text-white font-bold shadow-2xl text-center -mt-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-3xl uppercase text-white font-bold shadow-2xl text-center -mt-16">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-3xl uppercase text-white font-bold shadow-2xl text-center -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-3xl uppercase text-white font-bold shadow-2xl text-center -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-3xl uppercase text-white font-bold shadow-2xl text-center -mt-16">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

