import FilterSection from "../MainSection/FilterSection";
import SideMenuHeader from "./SideMenuHeader";

export default function Filter() {
    return (
        <div className="text-secondary">
            <SideMenuHeader />
            <div className="py-3 pe-2 sidemenu-container">
                <FilterSection />
            </div>
        </div>
    )
}