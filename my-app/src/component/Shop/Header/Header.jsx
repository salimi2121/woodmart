import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import SearchPage from "./SearchPage";

export default function Header() {
  const { setIsOpen, setContent } = useContext(SideMenuContext);

  const [openSearch, setOpenSearch] = useState(false);

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
          <div
            className="pointer header-item d-none d-1025-block"
            onClick={() => setIsOpen(true)}
          >
            ورود / ثبت نام
          </div>
          <div className="pointer header-item d-none d-1025-block">
            {openSearch ? (
              <IoCloseOutline
                className="header-icon fs-4"
                onClick={() => setOpenSearch(false)}
              />
            ) : (
              <CiSearch
                className="header-icon fs-4"
                onClick={() => setOpenSearch(true)}
              />
            )}
          </div>
          <div className="pointer position-relative header-item d-none d-1025-block">
            <CiHeart className="header-icon ms-2 mt-1 fs-4" />
            <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
              0
            </span>
          </div>
          <div
            className="pointer d-flex justify-content-between align-items-center header-item"
            onClick={() => setIsOpen(true)}
          >
            <div className="position-relative ms-3">
              <CiShoppingCart className="header-icon ms-2 mt-1 fs-4" />
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
      {openSearch && <SearchPage setOpenSearch={setOpenSearch} />}
    </>
  );
}
