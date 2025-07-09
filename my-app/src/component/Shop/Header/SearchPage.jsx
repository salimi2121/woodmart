import { IoCloseOutline } from "react-icons/io5";
import { persianNumber } from "../utils/utils.js";

export default function SearchPage(props) {
  return (
    <div className="search-page bg-white">
      <div className="search-page-header border-bottom border-1 d-flex align-items-center w-100 px-4 py-3">
        <input
          type="text"
          className="fs-1 border-0 w-100 px-3 text-center pb-2"
          placeholder="جستجوی محصولات"
          onChange={props.search}
        />
        <IoCloseOutline
          className="fs-1 close-btn pointer"
          onClick={() => props.setOpenSearch(false)}
        />
      </div>
      <div className="h-75 overflow-y-scroll">
        <div className="d-flex flex-wrap justify-content-center">
          {props.searchedItems &&
            props.searchedItems.map((item) => (
              <div className="mx-auto" key={item.id}>
                <img
                  src={item.img}
                  alt="product-img"
                  className="searched-product-img"
                />
                <div className="text-center d-flex flex-column">
                  <span>{item.name}</span>
                  <span className="text-orange fw-500">{`${persianNumber(
                    item.price.toFixed(3)
                  )} تومان`}</span>
                </div>
              </div>
            ))}
            {props.searchedItems && props.searchedItems.length === 0 && (
              <span className="text-secondary fw-500 my-3">محصولی یافت نشد</span>
            )}
            {!props.searchedItems && (
              <span className="text-secondary fw-500 my-3">برای دیدن محصولات که دنبال آن هستید تایپ کنید.</span>
            )}
        </div>
        {props.searchedItems && props.searchedItems.length !== 0 && (
          <div className="view-all text-center py-3 my-3 pointer border-top border-bottom border-1">
            <span className="fw-500">مشاهده همه نتایج</span>
          </div>
        )}
      </div>
    </div>
  );
}
