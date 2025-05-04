import img1 from '../../../assets/home-page/category1/c1.png'
import img2 from '../../../assets/home-page/category1/c2.png'
import img3 from '../../../assets/home-page/category1/c3.png'
import img4 from '../../../assets/home-page/category1/c4.png'
import { IoIosArrowBack } from "react-icons/io";

export default function FoodCategorySection(){
    return(
        <div className="food-category bg-pink px-4 ">
           <div className="food-category-container container-fluid py-5">
    <div className="food-category-items row g-4 justify-content-center">
        {/* آیتم ۱ */}
        <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-sm-4 mb-lg-4 mb-xl-0">
            <div className="position-relative d-flex flex-column justify-content-start align-items-start bg-white p-3 rounded-3 h-100">
                <h3 className="text-black fs-6 fw-bold ">غذای گربه ها</h3>
                <a href="#" className="text-white rounded-1 d-flex justify-content-between align-items-center px-1 bg-orange">
                    <h5 className="fs-11 fw-semibold m-0 me-1">مشاهده محصولات</h5>
                    <div className="fs-14 m-0"><IoIosArrowBack /></div>    
                </a>
                <div className="category-img position-absolute">
                    <img src={img1} alt="" className="w-100" />
                </div>
            </div>
        </div>

        {/* آیتم ۲ */}
        <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-sm-4 mb-lg-4 mb-xl-0">
            <div className="position-relative d-flex flex-column justify-content-start align-items-start bg-white p-3 rounded-3 h-100">
                <h3 className="text-black fs-6 fw-bold">غذای ماهی ها</h3>
                <a href="#" className="text-white rounded-1 d-flex justify-content-between align-items-center px-1 bg-orange">
                    <h5 className="fs-11 fw-semibold m-0 me-1">مشاهده محصولات</h5>
                    <div className="fs-14 m-0"><IoIosArrowBack /></div>    
                </a>
                <div className="category-img position-absolute">
                    <img src={img2} alt="" className="w-100" />
                </div>
            </div>
        </div>

        {/* آیتم ۳ */}
        <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <div className="position-relative d-flex flex-column justify-content-start align-items-start bg-white p-3 rounded-3 h-100">
                <h3 className="text-black fs-6 fw-bold">غذای پرندگان</h3>
                <a href="#" className="text-white rounded-1 d-flex justify-content-between align-items-center px-1 bg-orange">
                    <h5 className="fs-11 fw-semibold m-0 me-1">مشاهده محصولات</h5>
                    <div className="fs-14 m-0"><IoIosArrowBack /></div>    
                </a>
                <div className="category-img position-absolute">
                    <img src={img3} alt="" className="w-100" />
                </div>
            </div>
        </div>

        {/* آیتم ۴ */}
        <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <div className="position-relative d-flex flex-column justify-content-start align-items-start bg-white p-3 rounded-3 h-100">
                <h3 className="text-black fs-6 fw-bold">غذای سگ ها</h3>
                <a href="#" className="text-white rounded-1 d-flex justify-content-between align-items-center px-1 bg-orange">
                    <h5 className="fs-11 fw-semibold m-0 me-1">مشاهده محصولات</h5>
                    <div className="fs-14 m-0"><IoIosArrowBack /></div>    
                </a>
                <div className="category-img position-absolute">
                    <img src={img4} alt="" className="w-100" />
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}