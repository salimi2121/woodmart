import { CiSearch } from "react-icons/ci";
import SearchedProduct from "../../Header/SearchedProduct";
import { useState } from "react";
import List from "./List";

export default function Menu(props) {
  const [options, setOptions] = useState([
    { title: "منو", isActive: true },
    { title: "دسته بندی ها", isActive: false },
  ]);

  function changeBtn(i) {
    const updatedOptions = [...options];
    updatedOptions.map((item, index) => {
      index === i ? (item.isActive = true) : (item.isActive = false);
    });
    setOptions(updatedOptions);
  }

  return (
    <div className="menu">
      <div className="search-section w-100 px-3 py-4 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="w-100"
          placeholder="جستجوی محصولات"
          onChange={props.search}
        />
        <CiSearch className="fs-3 me-3" />
      </div>
      {props.searchedItems && (
        <div className="searched-products-list border overflow-y-scroll">
          <SearchedProduct searchedItems={props.searchedItems} />
          {props.searchedItems && props.searchedItems.length !== 0 && (
            <div className="view-all text-center py-3 mt-3 pointer border-top border-1">
              <span className="fw-500">مشاهده همه نتایج</span>
            </div>
          )}
        </div>
      )}
      <div className="d-flex justify-content-between">
        {options.map((item, i) => (
          <div
            key={i}
            className={`${
              item.isActive && "active"
            } option-btn py-3 pointer w-50 text-center`}
            onClick={() => changeBtn(i)}
          >
            {item.title}
          </div>
        ))}
      </div>
      {options.map(
        (item, i) =>
          item.isActive && <List key={i} navItems={props.navItems} topic={item.title} />
      )}
    </div>
  );
}
