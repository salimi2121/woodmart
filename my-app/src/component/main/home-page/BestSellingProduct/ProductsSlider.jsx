
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProductCard from '../OffPetSection/ProductCard';

const ProductsSlider = ({
  products,
  clickedHearts,
  onHeartClick,
  onOpenModal,
  isLoading,
  opacity
}) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '390px' }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ opacity: opacity, transition: 'opacity 0.9s ease-in-out', width: '100%' }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.best-selling-button-next',
          prevEl: '.best-selling-button-prev',
        }}
        slidesPerView={5}
        spaceBetween={0}
        autoHeight={true}
        breakpoints={{
          280: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1090: { slidesPerView: 5 },
        }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              className="off-swiper-items g-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-2"
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
                onOpenModal={onOpenModal}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="best-selling-button-prev fs-1">
        <FiChevronRight />
      </div>
      <div className="best-selling-button-next fs-1">
        <FiChevronLeft />
      </div>
    </div>
  );
};

export default ProductsSlider;