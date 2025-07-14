import { useContext } from "react";
import Login from "./Login";
import { SideMenuContext } from "../contexts/SideMenuContext";
import Cart from "./Cart";
import Menu from "./Menu/Menu";
import Filter from "./Filter";

export default function SideMenu(props) {

  const { isOpen, setIsOpen, content } = useContext(SideMenuContext);

  function renderContent() {
    switch (content) {
      case "login":
        return <Login />;
      case "cart":
        return <Cart />;
      case "menu":
        return <Menu searchedItems={props.searchedItems} search={props.search} setSearchedItems={props.setSearchedItems} navItems={props.navItems} />
      case "filter":
        return <Filter />
    }
  }

  return (
    isOpen && (
      <>
        <div className="sidemenu position-fixed top-0 start-0 h-full bg-white overflow-y-scroll">
          {renderContent()}
        </div>
        <div className="overlay" onClick={() => setIsOpen(false) }></div>
      </>
    )
  );
}
