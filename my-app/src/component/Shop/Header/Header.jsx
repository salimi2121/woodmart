import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="mx-xl-5 d-flex justify-content-around align-items-center py-3 px-2">
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
        <div className="pointer">ورود / ثبت نام</div>
        <div className="pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="pointer position-relative">
          <FontAwesomeIcon icon={faHeart} className="ms-1 mt-1" />
          <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
            0
          </span>
        </div>
        <div className="pointer d-flex justify-content-between align-items-center">
          <div className="position-relative ms-3">
            <FontAwesomeIcon icon={faCartShopping} className="ms-1 mt-2" />
            <span className="px-1 count position-absolute top-0 start-0 rounded-circle bg-orange text-white">
              0
            </span>
          </div>
          <span>0 تومان</span>
        </div>
      </div>
      <hr className="my-1" />
    </header>
  );
}
