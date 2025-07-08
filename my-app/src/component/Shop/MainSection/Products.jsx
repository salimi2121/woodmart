import { useContext, useState } from "react";
import { persianNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { FaEllipsis, FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdCheckmark, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoShuffle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { ProductsContext } from "../contexts/ProductsContext";

export default function Products() {

  const {products, setProducts} = useContext(ProductsContext)

  const [showDetails, setShowDetails] = useState(null);

  const [showText, setShowText] = useState(false);

  function addToFavorite(i) {
    const updatedProducts = [...products];
    updatedProducts[i].isFavorite = !updatedProducts[i].isFavorite;
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(products));
  }

  return (
    <section className="my-3">
      <div className="d-flex flex-wrap">
        {products &&
          products.map((item, i) => (
            <div
              className={`${
                showDetails === item.id && "z-3"
              } position-relative mx-2 my-3 bg-white product-wrapper`}
              key={item.id}
            >
              <div
                className="product text-center px-4 py-3 bg-white position-relative"
                onMouseEnter={() => setShowDetails(item.id)}
                onMouseLeave={() => setShowDetails(null)}
              >
                <div>
                  {showDetails === item.id && (
                    <div className="comparison position-absolute border border-end-0 border-start-0 bg-white w-75 text-start px-2">
                      <IoShuffle className="product-option" />
                    </div>
                  )}
                  <Link to="#" className="text-black">
                    <img
                      src={item.img}
                      alt="product-img"
                      className="product-img"
                    />
                    <h6 className="my-2 fw-normal py-1 product-name">
                      {item.name}
                    </h6>
                  </Link>
                  <span className="text-orange fw-bold price">
                    {showDetails !== item.id
                      ? `${persianNumber(item.price.toFixed(3))} تومان`
                      : [...Array(5)].map((_, i) =>
                          i < item.rate ? (
                            <FaStar key={i} color="yellow" />
                          ) : (
                            <FaRegStar key={i} className="text-secondary" />
                          )
                        )}
                  </span>
                </div>
                {showDetails === item.id && (
                  <div className="product-hover position-absolute border border-top-0 px-4 py-2 bg-white w-100 end-0 h-auto">
                    <div className="position-relative">
                      <p
                        className={`text-secondary fw-500 ${
                          showText !== item.id && "text-hide"
                        } product-description p-0 m-0`}
                      >
                        {item.description}
                      </p>
                      {showText !== item.id && (
                        <div
                          className="ellipsis w-100 pointer position-absolute bottom-0 end-0"
                          onClick={() => setShowText(item.id)}
                        >
                          <FaEllipsis />
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-between py-3">
                      {item.isFavorite ? (
                        <IoMdCheckmark className="product-option"
                        onClick={() => addToFavorite(i)}
                         />
                      ) : (
                      <IoMdHeartEmpty className="product-option"
                      onClick={() => addToFavorite(i)}
                       />
                      )}
                      <div className="line bg-secondary"></div>
                      <IoCartOutline className="product-option" />
                      <div className="line bg-secondary"></div>
                      <FiSearch className="product-option" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
