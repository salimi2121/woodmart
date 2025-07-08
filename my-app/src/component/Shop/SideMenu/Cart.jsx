import { useContext } from "react";
import SideMenuHeader from "./SideMenuHeader";
import { CartContext } from "../contexts/CartContext";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {

    const {cart} = useContext(CartContext);

    return (
        <div>
            <SideMenuHeader title="سبد خرید" />
            {cart.length === 0 && (
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column align-items-center mb-3 mt-4">
                        <MdOutlineRemoveShoppingCart className="empty-cart-icon mb-2" />
                        <span className="fw-bold">هیچ محصولی در سبد خرید نیست.</span>
                    </div>
                    <Link to="/" className="return-btn fw-500 bg-orange rounded-5 text-white my-3">بازگشت به فروشگاه</Link>
                </div>
            )}
        </div>
    )
}