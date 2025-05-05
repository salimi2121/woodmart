import {
  faAngleDown,
  faAngleUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const category = useRef([
    "غذای گربه ها",
    "غذای سگ ها",
    "غذای ماهی ها",
    "غذای پرندگان",
    "دارو و تقویتی",
    "لوازم نگهداری حیوانات",
  ]);

  return (
    <div
      className="h-100 position-relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="category-menu pointer px-3 py-3 bg-orange text-white d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faBars} className="ms-2" />
        <span>دسته بندی محصولات</span>
        <FontAwesomeIcon icon={faAngleDown} className="me-auto" />
      </div>
      {isOpen && (
        <div className="position-absolute w-100 z-2 bg-white">
          <ul className="px-0 my-0">
            {category.current.slice(0, 5).map((item, i) => (
              <li key={i} className="category-item fw-bold border-bottom px-4 py-2">{item}</li>
            ))}
            {showMore &&
              category.current
                .slice(5)
                .map((item, i) => <li key={i} className="category-item fw-bold border-bottom px-3 py-2">{item}</li>)}
            <button className="showmore-btn border-0 w-100 py-2" onClick={() => setShowMore((prev) => !prev)}>
              <FontAwesomeIcon icon={showMore ? faAngleUp : faAngleDown} />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
