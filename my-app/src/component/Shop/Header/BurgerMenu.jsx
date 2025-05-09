import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="d-1025-none">
            <div className="pointer text-secondary" onClick={() => setIsOpen((prev) => !prev)}>
                <FaBars />
                <span className="mx-2">منو</span>
            </div>
            {isOpen && (
                <div className="bg-white position-absolute top-0 start-0 h-full">
                    <div>
                        <input type="search" />
                        <FaMagnifyingGlass />
                    </div>
                </div>
            )}
        </div>
    )
}