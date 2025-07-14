import { useContext } from "react";
import SideMenuHeader from "./SideMenuHeader";
import { CartContext } from "../contexts/CartContext";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { persianNumber } from "../utils/utils";
import { IoClose } from "react-icons/io5";

export default function Cart() {
  const { cart, setCart, total } = useContext(CartContext);

  function deleteProduct(product, i) {
    const updatedCart = [...cart];
    updatedCart.splice(i, 1);
    setCart(updatedCart);
  }

  return (
    <div className="cart">
      <SideMenuHeader title="سبد خرید" />
      {cart.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center mb-3 mt-4">
            <MdOutlineRemoveShoppingCart className="empty-cart-icon mb-2" />
            <span className="fw-bold">هیچ محصولی در سبد خرید نیست.</span>
          </div>
          <Link
            to="/"
            className="return-btn fw-500 bg-orange rounded-5 text-white my-3"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      ) : (
        <div>
          <div className="sidemenu-container overflow-y-scroll">
            {cart.map((item, i) => (
              <div
                className="cart-product d-flex fw-500 border-top border-1 p-3 pointer"
                key={i}
              >
                <img src={item.img} alt="" className="cart-img" />
                <div className="d-flex flex-column justify-content-between me-2">
                  <span>
                    {item.name} - {item.color}، {item.weight}
                  </span>
                  <div>
                    <span className="text-secondary ms-2">
                      {persianNumber(item.quantity)} ×
                    </span>
                    <span className="text-orange">
                      {persianNumber(item.price.toFixed(3))} تومان
                    </span>
                  </div>
                </div>
                <div
                  className="pointer me-2"
                  onClick={() => deleteProduct(item, i)}
                >
                  <IoClose />
                </div>
              </div>
            ))}
          </div>
          <div className="position-fixed cart-footer bottom-0 start-0 py-2 px-3 border-top border-1">
            <div className="d-flex justify-content-between fw-500 mb-3 mt-2 fs-5">
              <span className="text-black">جمع جزء:</span>
              <span className="text-orange">{total}تومان</span>
            </div>
            <div className="w-100 rounded-5 fw-500 bg-orange text-center py-2">
              <Link
                to="/cart"
                className="text-white"
              >
                مشاهده سبد خرید
              </Link>
            </div>
            <div className="w-100 bg-orange rounded-5 fw-500 my-2 text-center py-2">
              <Link
                to="/checkout"
                className="text-white text-center"
              >
                تسویه حساب
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
