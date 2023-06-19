import React from "react";
import { productsData, productsItem } from "../../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import ProductCard from "../product/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const SliderHome = ({ products }: { products: productsData }) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-5">
      <h2 className="titleHome">Les dernières nouveautés</h2>
      <div className="flex py-5  items-center justify-center">
        <Swiper
          modules={[Navigation, A11y]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          breakpoints={{
            350: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            670: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1060: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1360: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {products.map((el: productsItem, index: React.Key) => (
            <SwiperSlide key={index} className="max-w-[300px]">
              <ProductCard el={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHome;
