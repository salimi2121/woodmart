import { persianNumber } from "../utils/utils";

export default function SearchedProduct(props) {
  return (
    <>
      {props.searchedItems &&
        props.searchedItems.map((item) => (
          <div
            className="searched-product border d-flex p-3 pointer align-items-center "
            key={item.id}
          >
            <img src={item.img} alt="" className="searched-product-img" />
            <div className="d-flex flex-column me-3">
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
    </>
  );
}
