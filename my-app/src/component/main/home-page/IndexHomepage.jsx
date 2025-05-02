import HeroSectionHomepage from "./HeroSectionHomepage";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Homepage.css'
import './ResponsiveHomepage.css'
import ReasonsToBuySection from "./ReasonsToBuySection";

export default function IndexHomepage(){
    return(
        <div className=""  dir="rtl">
            <HeroSectionHomepage />
            <ReasonsToBuySection />
        </div>
    )
}