import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchedProduct from "./SearchedProduct";

export default function SearchBox(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-none d-1025-block position-relative">
      <div className="search-box text-secondary border border-2 rounded-5 px-2 d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="w-75 border-0 mt-1 mb-2 text-secondary ms-auto"
          placeholder="جستجوی محصولات"
          onChange={props.search}
        />
        <div className="select-category position-relative">
          <div
            className="pointer px-2 ms-2 border border-top-0 border-bottom-0 py-2 d-flex justify-content-between align-items-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
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
          )}
        </div>
        <CiSearch className="pointer search-icon fs-4" />
      </div>
      {props.searchedItems && (
        <div className="position-absolute border bg-white mx-auto z-3 searchbox-menu overflow-y-scroll">
          <div className="d-flex flex-wrap justify-content-center">
            <SearchedProduct searchedItems={props.searchedItems} />
          </div>
          {props.searchedItems && props.searchedItems.length !== 0 && (
            <div className="view-all text-center py-3 mt-3 pointer border-top border-1">
              <span className="fw-500">مشاهده همه نتایج</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
