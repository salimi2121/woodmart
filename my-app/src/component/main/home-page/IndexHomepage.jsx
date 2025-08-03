import HeroSectionHomepage from "./HeroSectionHomepage";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Homepage.css'
import './ResponsiveHomepage.css'
import ReasonsToBuySection from "./ReasonsToBuySection";
import FoodCategorySection from "./FoodCategorySection";
import OffPetSection from "./OffPetSection/OffPetSection";
import ProductBrandSection from "./ProductBrandSection";
import AboutPetShopSection from "./AboutPetShopSection";
import ProductCategorySection from "./ProductCategorySection";
import BestSellingProductsSection from "./BestSellingProduct/BestSellingProductsSection";
import  ProductProvider  from "../../../ProductContext";
import WoodmartAppSection from "./WoodmartAppSection";
import BlogContentSection from "./BlogContentSection";

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
            <WoodmartAppSection />
            <BlogContentSection />

            
        </div>
    )
}