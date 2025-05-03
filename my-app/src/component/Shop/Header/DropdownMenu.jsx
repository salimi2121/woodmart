import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropdownMenu() {
    return (
        <div className="h-100">
            <div className="category-menu pointer px-3 py-3 bg-orange text-white d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBars} className="ms-2" />
                <span>دسته بندی محصولات</span>
                <FontAwesomeIcon icon={faAngleDown} className="me-auto" />
            </div>
        </div>
    )
}