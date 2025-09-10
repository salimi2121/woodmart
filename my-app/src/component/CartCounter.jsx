import React, {useState} from "react";

export default function CartCounter() {
    const [count , setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        if (count >0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center gap-4 p-4 btn-cart">
            <button onClick={decrease} className=" text-black px-3 py-1  rounded-lg  text-lg shop-bt-right shop-bt">
                -
            </button>
            <span className="text-xl font- shop-span"> {count}</span>
            <button onClick={increase} className=" text-black px-3 py-1  rounded-lg  text-lg shop-bt-left shop-bt">
                +
            </button>
        </div>
    )
}








