import HeroSectionHomepage from "./HeroSectionHomepage";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Homepage.css'
import './ResponsiveHomepage.css'
import ReasonsToBuySection from "./ReasonsToBuySection";
import FoodCategorySection from "./FoodCategorySection";
import OffPetSection from "./OffPetSection";
import ProductBrandSection from "./ProductBrandSection";
import AboutPetShopSection from "./AboutPetShopSection";
import ProductCategorySection from "./ProductCategorySection";
import BestSellingProductsSection from "./BestsellingproductsSection";
import { ProductProvider } from "../../../ProductContext";

export default function IndexHomepage() {
    return (
        <div className="" dir="rtl">
            <HeroSectionHomepage />
            <ReasonsToBuySection />
            <FoodCategorySection />
            <ProductProvider>
                <OffPetSection />
            </ProductProvider>
            <ProductBrandSection />
            <AboutPetShopSection />
            <ProductCategorySection />
            <ProductProvider >
                <BestSellingProductsSection />
            </ProductProvider>


        </div>
    )
}