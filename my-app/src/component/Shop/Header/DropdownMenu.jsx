import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function DropdownMenu() {

    const category = useRef(
        [
            "غذای گربه ها",
            "غذای سگ ها",
            "غذای ماهی ها",
            "غذای پرندگان",
            "دارو و تقویتی",
            "لوازم نگهداری حیوانات",
        ]
    )

    return (
        <div className="h-100 position-relative">
            <div className="category-menu pointer px-3 py-3 bg-orange text-white d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBars} className="ms-2" />
                <span>دسته بندی محصولات</span>
                <FontAwesomeIcon icon={faAngleDown} className="me-auto" />
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}