import HeroSectionHomepage from "./HeroSectionHomepage";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Homepage.css'
import './ResponsiveHomepage.css'
import ReasonsToBuySection from "./ReasonsToBuySection";
import FoodCategorySection from "./FoodCategorySection";
import OffPetSection from "./OffPetSection";

export default function IndexHomepage(){
    return(
        <div className=""  dir="rtl">
            <HeroSectionHomepage />
            <ReasonsToBuySection />
            <FoodCategorySection />
            <OffPetSection />
        </div>
    )
}