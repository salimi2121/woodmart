import { useEffect, useState } from "react";
import { persianNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { FaEllipsis, FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export default function Products() {
  const [products, setProducts] = useState(null);

  const [showDetails, setShowDetails] = useState(null);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    !products &&
      fetch("src/component/Shop/products.json")
        .then((response) => response.json())
        .then((res) => setProducts(res));
  }, []);

  return (
    <section className="my-3">
      <div className="d-flex flex-wrap">
        {products &&
          products.map((item) => (
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
                            <FaStar color="yellow" />
                          ) : (
                            <FaRegStar className="text-secondary" />
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
                      <IoMdHeartEmpty className="product-option" />
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
