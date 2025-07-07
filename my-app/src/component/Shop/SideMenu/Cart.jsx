import { useContext } from "react";
import SideMenuHeader from "./SideMenuHeader";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {

    const {cart} = useContext(CartContext);

    return (
        <div>
            <SideMenuHeader title="سبد خرید" />
            {/* {cart.length === 0 ? (
                <div></div>
            ) :} */}
        </div>
    )
}