import { useContext } from "react";
import Login from "./Login";
import { SideMenuContext } from "../contexts/SideMenuContext";
import Cart from "./Cart";

export default function SideMenu() {
  const { isOpen, setIsOpen } = useContext(SideMenuContext);

  return (
    isOpen && (
      <>
        <div className="sidemenu position-fixed top-0 start-0 h-full bg-white w-25">
          {/* <Login /> */}
          <Cart />
        </div>
        <div className="overlay" onClick={() => setIsOpen(false) }></div>
      </>
    )
  );
}
