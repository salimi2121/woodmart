import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SocialMedia from "../SocialMedia";

export default function Navbar(props) {

  return (
    <nav className="header-navbar z-1">
      <div className="mx-2 mx-xl-5 justify-content-between px-2 d-none d-1025-flex">
        <DropdownMenu />
        <ul className="align-self-end">
          {props.navItems.map((item, i) => {
            return (
              <li
                key={i}
                className={`d-inline mx-2 ${item.isActive && "link-active"}`}
              >
                <Link to={item.href} className={`${item.isActive && "active"}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialMedia />
      </div>
    </nav>
  );
}
