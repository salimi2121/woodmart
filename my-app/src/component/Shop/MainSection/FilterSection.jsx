import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { category } from "../constants";

export default function FilterSection() {

    const [productStatus, setProductStatus] = useState(
        [
            {title: "محصولات تخفیف دار", isActive: false},
            {title: "محصولات موجود", isActive: false}
        ]
    )

    const colorCategory = [
      {title: "آبی", quantity: 6, color: "#1e73be"},
      {title: "سبز", quantity: 6, color: "#81d742"},
      {title: "قرمز", quantity: 6, color: "#d33"},
      {title: "نارنجی", quantity: 6, color: "#d93"}
    ]

    const weightCategory = [
      {weight: "1 کیلوگرم", quantity: 6},
      {weight: "2 کیلوگرم", quantity: 6},
      {weight: "3 کیلوگرم", quantity: 6},
      {weight: "4 کیلوگرم", quantity: 6}
    ]

  return (
    <section className="w-25 bg-white text-secondary py-4 px-2 border-radius-16 box-shadow">
      <div className="container">
        <div className="title p-2 d-flex align-items-center">
          <FontAwesomeIcon icon={faFilter} />
          <h3 className="mx-3 mb-0">فیلتر های فروشگاه</h3>
        </div>
        <div className="py-3">
            <h6>وضعیت محصول</h6>
            <ul className="m-0 p-0">
                {productStatus.map((item, i) => (
                    <li key={i} className="filter d-flex align-items-end pointer">
                        <div className="checkbox border border-2 bg-white"></div>
                        <span className="mx-2">{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
        <hr />
        <div className="py-3">
            <h6>دسته بندی محصولات</h6>
            <ul className="m-0 p-0">
              {category.map((item, i) => (
                <li key={i} className="filter pointer"> {item}</li>
              ))}
            </ul>
        </div>
        <hr />
        <div className="py-3">
          <h6>فیلتر بر اساس رنگ</h6>
          <ul className="m-0 p-0">
            {colorCategory.map((item, i) => (
              <li key={i} className="filter pointer d-flex justify-content-center align-items-center">
                <div className="color rounded-circle" style={{backgroundColor: item.color}}></div>
                <span className="mx-2">{item.title}</span>
                <span className="me-auto quantity border px-2">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="py-3">
          <h6>فیلتر بر اساس وزن</h6>
          <ul className="m-0 p-0">
            {weightCategory.map((item, i) => (
              <li key={i} className="filter pointer d-flex justify-content-between align-items-center">
                <span className="weight fw-bold text-black">{item.weight}</span>
                <span className="quantity border px-2">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
