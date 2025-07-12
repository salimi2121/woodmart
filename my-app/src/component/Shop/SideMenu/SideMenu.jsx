import { useContext } from "react";
import Login from "./Login";
import { SideMenuContext } from "../contexts/SideMenuContext";
import Cart from "./Cart";
import Menu from "./Menu";

export default function SideMenu(props) {
  const { isOpen, setIsOpen } = useContext(SideMenuContext);

  return (
    isOpen && (
      <>
        <div className="sidemenu position-fixed top-0 start-0 h-full bg-white">
          {/* <Login /> */}
          {/* <Cart /> */}
          <Menu searchedItems={props.searchedItems} search={props.search} setSearchedItems={props.setSearchedItems} />
        </div>
        <div className="overlay" onClick={() => setIsOpen(false) }></div>
      </>
    )
  );
}
