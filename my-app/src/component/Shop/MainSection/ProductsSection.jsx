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

  const [ordering, setOrdering] = useState(
    [
      {title: "مرتب‌سازی پیش‌فرض", isActive: true},
      {title: "مرتب‌سازی  بر اساس محبوبیت", isActive: false},
      {title: "مرتب‌سازی بر اساس امتیاز", isActive: false},
      {title: "مرتب‌سازی جدید‌ترین", isActive: false},
      {title: "مرتب‌سازی ارزانترین", isActive: false},
      {title: "مرتب‌سازی گرانترین", isActive: false},
    ]
  )

  function showItemsCountHandler(i) {
    const changedCount = [...showItemsCount];
    changedCount.map((count) => {
        if (count.isActive) count.isActive = false;
    })
    changedCount[i].isActive = true;
    setShowItemsCount(changedCount);
  }

  return (
    <div className="w-100 me-3">
      <div className="box-shadow border-radius-16 bg-white p-3 pe-5 d-flex justify-content-center align-items-center">
        <div className="ms-auto">
          <span className="fw-500">نشان می دهد : </span>
          {showItemsCount.map((item, i) => (
            <div key={i} className="d-inline-block">
              <span className={`${item.isActive && "fw-500 text-black"} mx-1 pointer show-count`}
              onClick={() => showItemsCountHandler(i)}>
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
        <div>
          <div className="ordering pointer border-bottom border-2 px-1 py-2 d-flex align-items-center justify-content-between">
            <span className="fw-500">مرتب‌سازی پیش‌فرض</span>
            <FaAngleDown className="ordering-icon" />
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
