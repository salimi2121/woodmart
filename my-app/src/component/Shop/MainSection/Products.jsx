import { useContext, useEffect, useState } from "react";
import { persianNumber } from "../utils/utils";
import { Link } from "react-router-dom";
import { FaEllipsis, FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdCheckmark, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoCloseOutline, IoShuffle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import { SideMenuContext } from "../contexts/SideMenuContext";

export default function Products() {

  const { products, setProducts, favorite, setFavorite } =
    useContext(ProductsContext);

  const [showDetails, setShowDetails] = useState(null);

  const [showOptions, setShowOptions] = useState(null);

  const [showText, setShowText] = useState(false);

  const [selectedColor, setSelectedColor] = useState("");

  const [selectedWeight, setSelectedWeight] = useState("");

  const { cart, setCart } = useContext(CartContext);

  const { setContent, setIsOpen } = useContext(SideMenuContext);

  useEffect(() => {
    reset()
  }, [showOptions])

  function addToFavorite(item, i) {
    const updatedProducts = [...products];
    updatedProducts[i].isFavorite = true;
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(products));
    setFavorite((prev) => [...prev, item]);
  }

  function removeFromFavorite(item, i) {
    const updatedProducts = [...products];
    updatedProducts[i].isFavorite = false;
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(products));
    const updatedFavorite = [...favorite];
    updatedFavorite.map((favItem, i) => {
      favItem.id === item.id && updatedFavorite.splice(i, 1);
    });
    setFavorite(updatedFavorite);
  }

  function reset() {
    setSelectedColor("");
    setSelectedWeight("");
  }

  function addToCart(product) {
    if (selectedColor === "" || selectedWeight === "") {
      alert(
        "لطفا برخی از گزینه‌های محصول را قبل از اضافه کردن آن به سبد خرید، انتخاب کنید"
      );
    } else {
      const updatedCart = [...cart];
      const cartItemIndex = updatedCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.weight === selectedWeight
      );
      if (cartItemIndex !== -1) {
        updatedCart[cartItemIndex].quantity +=1;
        setCart(updatedCart)
      } else {
        setCart((prev) => ([...prev, {...product, quantity: 1, color: selectedColor, weight: selectedWeight}]))
      }
      setShowOptions(null)
      setContent("cart");
      setIsOpen(true);
    }
  }

  return (
    <section className="my-3">
      <div className="d-flex flex-wrap">
        {products &&
          products.map((item, i) => (
            <div
              className={`${
                showDetails === item.id && "z-3"
              } position-relative mx-2 my-3 bg-white`}
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
                        <IoMdCheckmark
                          className="product-option"
                          onClick={() => removeFromFavorite(item, i)}
                        />
                      ) : (
                        <IoMdHeartEmpty
                          className="product-option"
                          onClick={() => addToFavorite(item, i)}
                        />
                      )}
                      <div className="line bg-secondary"></div>
                      <IoCartOutline
                        className={`product-option ${showOptions === item.id && "disabled text-secondary"}`}
                        onClick={() => setShowOptions(item.id)}
                      />
                      <div className="line bg-secondary"></div>
                      <FiSearch className="product-option" />
                    </div>
                  </div>
                )}
                {showOptions === item.id && (
                  <div className="product-detail p-2 top-0 start-0 position-absolute w-100 overflow-y-scroll">
                    <div className="text-start">
                      <div
                        className="pointer close-btn"
                        onClick={() => setShowOptions(false)}
                      >
                        <IoCloseOutline className="fs-5" />
                        <span className="fw-bold">بستن</span>
                      </div>
                    </div>
                    <div className="mb-3 mt-4">
                      <span className="text-secondary fw-500">رنگ:</span>
                      <div className="d-flex justify-content-center my-2">
                        {item.color.map((color, i) => (
                          <div
                            key={i}
                            onClick={() => setSelectedColor(color.name)}
                            className={`${
                              selectedColor === color.name && "selected"
                            } color rounded-circle pointer mx-2`}
                            style={{ backgroundColor: color.code }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="fw-500 text-secondary">وزن:</span>
                      <div className="d-flex justify-content-center pointer flex-wrap">
                        {item.weight.map((weight, i) => (
                          <div
                            className={`weight ${
                              selectedWeight === weight && "selected"
                            } fw-500 m-2`}
                            key={i}
                            onClick={() => setSelectedWeight(weight)}
                          >
                            {weight}
                          </div>
                        ))}
                      </div>
                    </div>
                    {selectedColor !== "" && selectedWeight !== "" && (
                      <div>
                        <div className="pointer text-secondary" onClick={reset}>
                          <IoCloseOutline />
                          <span>پاک کردن</span>
                        </div>
                        <div className="fw-500 my-2">
                          <span>۳</span>
                          <IoMdCheckmark className="fs-5 text-orange ms-2" />
                          <span>عدد در انبار</span>
                        </div>
                      </div>
                    )}
                    <div
                      className="pointer bg-orange text-white py-2 mt-2"
                      onClick={() => addToCart(item)}
                    >
                      <span>افزودن به سبد خرید</span>
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
