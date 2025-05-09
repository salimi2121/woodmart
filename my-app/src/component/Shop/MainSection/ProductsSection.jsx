import { FaAngleDown, FaBars } from "react-icons/fa6";
import { TbGridDots, TbLayoutGrid } from "react-icons/tb";

export function ProductsSection() {
    return (
        <div className="w-100 me-3">
            <div className="box-shadow border-radius-16 bg-white py-4 px-3 d-flex justify-content-center align-items-center">
                <div className="ms-auto">نشان می دهد : 9 / 12 / 18 / 24</div>
                <div className="mx-2">
                    <FaBars className="grid-icon ms-1 pointer" />
                    <TbLayoutGrid className="grid-icon ms-1 pointer" />
                    <TbGridDots className="grid-icon ms-1 pointer" />
                </div>
                <div>
                    <div className="pointer border-bottom d-flex align-items-center justify-content-between">
                        <span className="fw-bold">مرتب سازی پیش‌فرض</span>
                        <FaAngleDown className="text-secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}