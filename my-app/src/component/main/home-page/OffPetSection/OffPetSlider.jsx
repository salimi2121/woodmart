import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function OffPetSlider({ 
  products, 
  clickedHearts, 
  onHeartClick,
  onAddToCart
}) {
  
  return (
    <div className="position-relative flex justify-content-center align-items-center w-100">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.off-swiper-button-next',
          prevEl: '.off-swiper-button-prev',
        }}
        slidesPerView={4}
        spaceBetween={0}
        autoHeight={true}
        breakpoints={{
          280: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              className="off-swiper-items g-0 d-flex justify-content-center align-items-center ms-2 w-100 h-100 rounded-2"
              style={{
                padding: '10px',
                cursor: 'grab',
                userSelect: 'none',
                height: '390px'
              }}
            >
              <ProductCard
                product={product}
                isHeartClicked={clickedHearts[product.id]}
                onHeartClick={onHeartClick}
                onAddToCart={onAddToCart}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="off-swiper-button-prev fs-1">
        <FiChevronRight />
      </div>
      <div className="off-swiper-button-next fs-1">
        <FiChevronLeft />
      </div>
    </div>
  );
}