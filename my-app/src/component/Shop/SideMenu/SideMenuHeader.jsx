import { IoCloseOutline } from "react-icons/io5";
import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";


export default function SideMenuHeader(props) {

    const {setIsOpen} = useContext(SideMenuContext);

  return (
    <div className="sidemenu-header position-fixed top-0 start-0 border-1 border-bottom d-flex justify-content-between px-3 py-4">
      <h5 className="sidemenu-title fw-bold">{props.title}</h5>
      <div className="pointer close-btn" onClick={() => setIsOpen(false)}>
        <IoCloseOutline className="fs-3" />
        <span className="fw-bold">بستن</span>
      </div>
    </div>
  );
}
