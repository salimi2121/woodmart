import { useState, useRef } from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { IoMdHeartEmpty, IoMdCheckmark } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import ProductModal from './ProductModal';

export default function ProductCard({ 
  product, 
  isHeartClicked, 
  onHeartClick,
  onAddToCart
}) {
  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div className="swiper-item position-relative d-flex flex-column justify-content-center align-items-center gap-1 p-2 bg-white rounded-4">
      {/* محتوای کارت محصول */}
      <div className="position-relative swiper-image-container p-2 w-100">
        <img
          src={product.image || '/placeholder.jpg'}
          alt={product.title || ''}
          className="w-100 h-100 object-fit-cover"
          onError={(e) => {
            e.target.src = '/placeholder.jpg';
          }}
        />
        <div
          className="btn-heart d-none position-absolute p-2 fs-5 bg-white rounded-circle text-black"
          onClick={() => onHeartClick(product.id)}
        >
          {isHeartClicked ? <IoMdCheckmark /> : <IoMdHeartEmpty />}
        </div>
      </div>
      
      <h2 className="text-black fs-6 fw-light">{product.title}</h2>
      <div className="d-flex text-secondary">
        {[...Array(5)].map((_, i) => <IoIosStarOutline key={i} />)}
      </div>
      <p className='f-vazir-fanum text-orange fw-semibold'>تومان{product.price}</p>
      
      <button 
        ref={buttonRef}
        className="btn-select bg-orange rounded-5 py-2 px-2 mb-2 text-white fs-11 fw-bolder border-0"
        onClick={() => setShowModal(!showModal)}
      >
        <span className="text-select fs-14">انتخاب گزینه ها</span>
        <div className="icon-select text-white rotate-180 m-0 p-0">
          <TfiShoppingCart size={21} />
        </div>
      </button>

      {/* مودال */}
      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
          onAddToCart={onAddToCart}
          buttonRef={buttonRef}
        />
      )}
    </div>
  );
}