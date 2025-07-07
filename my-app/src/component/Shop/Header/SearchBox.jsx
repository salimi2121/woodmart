import { FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {

  const [isOpen, setIsOpen] = useState(false);

  // const [searchedItems, setSearchedItems] = useState(null);

  function searchItems() {
    console.log("Searching...");
  }

  return (
    <div className="d-none d-1025-block">
      <div className="search-box text-secondary border border-2 rounded-5 px-2 d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="border-0 mt-1 mb-2 text-secondary ms-auto"
          placeholder="جستجوی محصولات"
          onChange={searchItems}
        />
        <div className="select-category position-relative">
          <div className="pointer px-2 ms-2 border border-top-0 border-bottom-0 py-2 d-flex justify-content-between align-items-center" onClick={() => setIsOpen((prev) => !prev)}>
            <span>انتخاب دسته بندی</span>
            <FaAngleDown />
          </div>
          {isOpen && (
            <div className="select-category-menu bg-white position-absolute w-100 z-2">
              <ul className="pt-2 px-3">
                <li className="pointer text-end py-2">غذای گربه</li>
                <li className="pointer text-end py-2">غذای ماهی</li>
              </ul>
            </div>
          )
          }
        </div>
        <CiSearch className="pointer search-icon fs-4" />
      </div>
    </div>
  );
}
