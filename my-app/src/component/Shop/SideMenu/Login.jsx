import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SideMenuContext } from "../contexts/SideMenuContext";

export default function Login() {

    const {setIsOpen} = useContext(SideMenuContext);

    return (
        <div>
            <div className="sidemenu-header border-1 border-bottom d-flex justify-content-between px-3 py-4">
                <h5>ورود</h5>
                <div className="pointer"
                onClick={() => setIsOpen(false)}
                >
                    <IoCloseOutline />
                    <span>بستن</span>
                </div>
            </div>
        </div>
    )
}