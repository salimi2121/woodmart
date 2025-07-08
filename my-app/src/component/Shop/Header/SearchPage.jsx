import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ProductsContext } from "../contexts/ProductsContext";

export default function SearchPage(props) {
  const { products } = useContext(ProductsContext);

  const [searchedItems, setSearchedItems] = useState(null);

  function search(e) {
    const filteredItems = products.filter((item) => item.name.includes(e.target.value));
    setSearchedItems(filteredItems);
  }

  return (
    <div className="search-page bg-white">
      <div className="search-page-header border-bottom border-1 d-flex align-items-center w-100 px-4 py-3">
        <input
          type="text"
          className="fs-1 border-0 w-100 px-3 text-center pb-2"
          placeholder="جستجوی محصولات"
          onChange={search}
        />
        <IoCloseOutline
          className="fs-1 close-btn pointer"
          onClick={() => props.setOpenSearch(false)}
        />
      </div>
      <div className="d-flex flex-wrap">
        {searchedItems && searchedItems.map((item) => (
            <div>
                <img src={item.img} alt="product-img" />
                
            </div>
        ))}
      </div>
    </div>
  );
}
