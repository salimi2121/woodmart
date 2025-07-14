import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import SearchPage from "./SearchPage";
import { ProductsContext } from "../contexts/ProductsContext";
import { FaBars } from "react-icons/fa6";
import SideMenu from '../SideMenu/SideMenu';
import { CartContext } from "../contexts/CartContext";

export default function Header() {

  const { setIsOpen, setContent } = useContext(SideMenuContext);

  const { total, cartCount } = useContext(CartContext);

  const [openSearch, setOpenSearch] = useState(false);

  const { products, favorite } = useContext(ProductsContext);

  const [searchedItems, setSearchedItems] = useState(null);

  const [navItems, setNavItems] = useState([
    { title: "خانه", href: "/", isActive: false },
    { title: "فروشگاه", href: "/shop", isActive: true },
    { title: "وبلاگ", href: "/وبلاگ", isActive: false },
    { title: "تماس با ما", href: "/تماس-با-ما", isActive: false },
    { title: "درباره ما", href: "/درباره-ما", isActive: false },
  ]);

  function search(e) {
    if (e.target.value === "") {
      setSearchedItems(null);
    } else {
      const filteredItems = products.filter((item) =>
        item.name.includes(e.target.value.trim())
      );
      setSearchedItems(filteredItems);
    }
  }

  function openSideMenu(page) {
    setContent(page);
    setIsOpen(true);
  }

  return (
    <>
      <header className="bg-white position-sticky top-0 end-0">
        <div className="mx-2 mx-xl-5 d-flex justify-content-between align-items-center py-3 px-2">
          <div
            className="d-1025-none pointer text-secondary"
            onClick={() => openSideMenu("menu")}
          >
            <FaBars />
            <span className="mx-2">منو</span>
          </div>
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
          <SearchBox
            searchedItems={searchedItems}
            setSearchedItems={setSearchedItems}
            search={search}
          />
          <div
            className="pointer header-item d-none d-1025-block"
            onClick={() => openSideMenu("login")}
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
              {favorite ? favorite.length : "0"}
            </span>
          </div>
          <div
            className="pointer d-flex justify-content-between align-items-center header-item"
            onClick={() => openSideMenu("cart")}
          >
            <div className="position-relative ms-3">
              <CiShoppingCart className="header-icon ms-2 mt-1 fs-4" />
              <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
                {cartCount}
              </span>
            </div>
            <span className="d-none d-1025-block">{total} تومان</span>
          </div>
        </div>
        <hr className="mt-1 mb-0" />
      </header>
      <Navbar navItems={navItems} />
      {openSearch && (
        <SearchPage
          setOpenSearch={setOpenSearch}
          searchedItems={searchedItems}
          setSearchedItems={setSearchedItems}
          search={search}
        />
      )}
      <SideMenu searchedItems={searchedItems} search={search} setSearchedItems={setSearchedItems} navItems={navItems} />
    </>
  );
}
