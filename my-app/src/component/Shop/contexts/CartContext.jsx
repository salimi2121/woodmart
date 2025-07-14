import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);

    const [cartCount , setCartCount] = useState(0);

    useEffect(() => {
        let sum = 0;
        cart.map((item) => sum += item.price * item.quantity)
        sum === 0 ? setTotal(sum) : setTotal(sum.toFixed(3));
        let count = 0;
        cart.map((item) => count += item.quantity)
        setCartCount(count);
        cart.length !== 0 && localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        savedCart && setCart(savedCart)
    }, [])

    return (
        <CartContext.Provider value={{cart, setCart, total, cartCount}}>
            {children}
        </CartContext.Provider>
    )
}