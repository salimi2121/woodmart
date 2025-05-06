import p1 from '../../../assets/home-page/product-category/1.png'
import p2 from '../../../assets/home-page/product-category/2.png'
import p3 from '../../../assets/home-page/product-category/3.png'


export default function ProductCategorySection() {
    return (
        <div className=" my-5">
            <div className="product-category px-5 container-fluid d-flex gap-4 justify-content-center align-items-center">
                <div className="w-30 product-category-item d-flex justify-content-center align-items-center">
                    <img src={p3} alt="" className='w-100' />
                </div>
                <div className="w-30 product-category-item d-flex justify-content-center align-items-center">
                    <img src={p2} alt="" className='w-100' />
                </div>
                <div className="w-30 product-category-item d-flex justify-content-center align-items-center">
                    <img src={p1} alt="" className='w-100' />
                </div>

            </div>
        </div>
    )
}