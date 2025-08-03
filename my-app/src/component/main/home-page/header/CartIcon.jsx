import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

function CartIcon({ count = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="position-relative d-inline-block" onClick={() => setIsOpen(true)}>

        <div className="rounded-circle bg-pink-1 cart-icon d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px' }}>
          <RiShoppingCartLine size={20} className="" />
        </div>

        {count >= 0 && (
          <span className="position-absolute d-flex justify-content-center align-items-center count-shopping f-vazir-fanum translate-middle badge rounded-circle"
            style={{ fontSize: '0.6rem', padding: '0.30em 0.63em' }}>
            {count}
            <span className="visually-hidden">items in cart</span>
          </span>
        )}
      </div>
      {/* cart box */}
      <div className={`cart-box ${isOpen ? 'open' : ''}`}>
        <div className="cart-box-header">
          <h1 className='fs-2 m-0 d-flex align-items-center'>سبد خرید</h1>

          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseSharp size={20} /><span className='fw-bold'>بستن</span>
          </button>
        </div>
        <div className="cart-box-content pt-5 d-flex flex-column justify-content-center align-items-center gap-3">
          {count == 0 && (
            <svg
              fill="#ededed"
              viewBox="0 0 32 32"
              width="69"
              height="69"
              stroke="#ededed"
            >
              <g id="SVGRepo_bgCarrier" ></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>{`.cls-1 { fill: none; }`}</style>
                </defs>
                <circle cx="10" cy="28" r="2"></circle>
                <circle cx="24" cy="28" r="2"></circle>
                <path d="M4.9806,2.8039A1,1,0,0,0,4,2H0V4H3.18L7.0194,23.1961A1,1,0,0,0,8,24H26V22H8.82l-.8-4H26a1,1,0,0,0,.9762-.783L29.2445,7H27.1971l-1.9989,9H7.62Z" transform="translate(0)"></path>
                <polygon points="18.41 8 22 4.41 20.59 3 17 6.59 13.41 3 12 4.41 15.59 8 12 11.59 13.41 13 17 9.41 20.59 13 22 11.59 18.41 8"></polygon>

              </g>
            </svg>
          )}
          <h2>هیچ محصولی در سبدخرید نیست.</h2>
          <a href="" className='d-flex justify-content-center align-items-center text-white rounded-pill bg-orange'>بازگشت به فروشگاه</a>
        </div>
      </div>
      {/* overlay */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

    </div>

  );
}

export default CartIcon;