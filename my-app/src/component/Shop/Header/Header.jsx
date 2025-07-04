import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import { FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-white position-sticky top-0 end-0">
        <div className="mx-2 mx-xl-5 d-flex justify-content-between align-items-center py-3 px-2">
          <BurgerMenu />
          <Link to="/">
            <img
              src="/wood-logo-dark.svg"
              className="woodmart-logo d-1025-none"
              alt="logo"
            />
            <img
              src="/logo.png"
              className="petshop-logo d-none d-1025-block"
              alt="logo"
            />
          </Link>
          <SearchBox />
          <div className="pointer header-item d-none d-1025-block">
            ورود / ثبت نام
          </div>
          <div className="pointer header-item d-none d-1025-block">
            <FaMagnifyingGlass className="header-icon" />
          </div>
          <div className="pointer position-relative header-item d-none d-1025-block">
            <FaHeart className="header-icon ms-2 mt-1" />
            <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
              0
            </span>
          </div>
          <div className="pointer d-flex justify-content-between align-items-center header-item">
            <div className="position-relative ms-3">
              <FaCartShopping className="header-icon ms-2 mt-2" />
              <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
                0
              </span>
            </div>
            <span className="d-none d-1025-block">0 تومان</span>
          </div>
        </div>
        <hr className="mt-1 mb-0" />
      </header>
      <Navbar />
    </>
  );
}
