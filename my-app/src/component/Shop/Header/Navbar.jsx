import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SocialMedia from "../SocialMedia";

export default function Navbar() {
  const [navItems, setNavItems] = useState([
    { title: "خانه", href: "/", isActive: false },
    { title: "فروشگاه", href: "/shop", isActive: true },
    { title: "وبلاگ", href: "/وبلاگ", isActive: false },
    { title: "تماس با ما", href: "/تماس-با-ما", isActive: false },
    { title: "درباره ما", href: "/درباره-ما", isActive: false },
  ]);

  return (
    <nav className="header-navbar z-1">
      <div className="mx-2 mx-xl-5 justify-content-between px-2 d-none d-1025-flex">
        <DropdownMenu />
        <ul className="align-self-end">
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                className={`d-inline mx-2 ${item.isActive && "active"}`}
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
