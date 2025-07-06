import { useContext } from "react";
import Login from "./Login";
import { SideMenuContext } from "../contexts/SideMenuContext";

export default function SideMenu() {

    const {isOpen} = useContext(SideMenuContext);

    return (
        isOpen && (
            <div className="sidemenu position-absolute top-0 start-0 h-full bg-white w-25">
                <Login />
            </div>
        )
        
    )
}