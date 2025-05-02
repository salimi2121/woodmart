import { faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBox() {
  return (
    <div className="d-none d-1025-block">
      <div className="search-box text-secondary border border-2 rounded-5 px-2 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="w-68 border-0 mt-1 mb-2 text-secondary"
          placeholder="جستجوی محصولات"
        />
        <div className="w-25 select-category">
          <div className="pointer px-3 border border-top-0 border-bottom-0 py-2 d-flex justify-content-between align-items-center">
            <span>انتخاب دسته بندی</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="ps-2" />
      </div>
    </div>
  );
}
