import { FaAngleDown, FaBars } from "react-icons/fa6";
import { TbGridDots, TbLayoutGrid } from "react-icons/tb";
import { persianNumber } from "../utils/utils";
import { useState } from "react";
import Products from "./Products";

export function ProductsSection() {
  const [showItemsCount, setShowItemsCount] = useState([
    { count: 9, isActive: false },
    { count: 12, isActive: true },
    { count: 18, isActive: false },
    { count: 24, isActive: false },
  ]);

  const [ordering, setOrdering] = useState([
    { title: "مرتب‌سازی پیش‌فرض", isActive: true },
    { title: "مرتب‌سازی  بر اساس محبوبیت", isActive: false },
    { title: "مرتب‌سازی بر اساس امتیاز", isActive: false },
    { title: "مرتب‌سازی جدید‌ترین", isActive: false },
    { title: "مرتب‌سازی ارزانترین", isActive: false },
    { title: "مرتب‌سازی گرانترین", isActive: false },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  function showItemsCountHandler(i) {
    const changedCount = [...showItemsCount];
    changedCount.map((count) => {
      if (count.isActive) count.isActive = false;
    });
    changedCount[i].isActive = true;
    setShowItemsCount(changedCount);
  }

  function orderingHandler(i) {
    const changedOrdering = [...ordering];
    changedOrdering.map((item) => {
      if (item.isActive) item.isActive = false;
    })
    changedOrdering[i].isActive = true;
    setOrdering(changedOrdering);
    setIsOpen(false);
  }

  return (
    <div className="w-100 me-3">
      <div className="box-shadow border-radius-16 bg-white p-3 pe-5 d-flex justify-content-center align-items-center">
        <div className="ms-auto">
          <span className="fw-500">نشان می دهد : </span>
          {showItemsCount.map((item, i) => (
            <div key={i} className="d-inline-block">
              <span
                className={`${
                  item.isActive && "fw-500 text-black"
                } mx-1 pointer show-count`}
                onClick={() => showItemsCountHandler(i)}
              >
                {persianNumber(item.count)}
              </span>
              {i !== showItemsCount.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
        <div className="mx-2">
          <FaBars className="grid-icon ms-1 pointer" />
          <TbLayoutGrid className="grid-icon ms-1 pointer" />
          <TbGridDots className="grid-icon ms-1 pointer" />
        </div>
        <div className="position-relative">
          <div
            className="ordering pointer px-1 py-2 d-flex align-items-center justify-content-between"
            tabIndex="0"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="fw-500">
              {ordering.map((item) => {
                if (item.isActive) return item.title;
              })}
            </span>
            <FaAngleDown className="ordering-icon" />
          </div>
          {isOpen && (
            <div className="position-absolute end-0 start-0 z-2 bg-white">
              <ul className="m-0 p-0 ordering-list">
                {ordering.map((item, i) => (
                  <li key={i} className="ordering-item pointer p-1" onClick={() => orderingHandler(i)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Products />
    </div>
  );
}
