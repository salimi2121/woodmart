import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import ProductSearchBox from './ProductSearchBox';

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* دکمه باز کردن منو */}
            <button
                className="menu-toggle-btn d-flex justify-content-center align-items-center"
                onClick={() => setIsOpen(true)}
            >
                <RxHamburgerMenu size={24} />
            </button>

            {/* منوی سایدبار */}
            <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button
                        className="close-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoCloseSharp size={20} /><span className='fw-bold'>بستن</span>
                    </button>
                </div>
                <div className="sidebar-content">
                    <nav className="nav-menu">
                        <a href="#" className=" d-flex justify-content-between align-items-center">
                            
                            <ProductSearchBox />
                        </a>
                        <a href="#" className="nav-item text-orange">خانه</a>
                        <a href="#" className="nav-item">فروشگاه</a>
                        <a href="#" className="nav-item">وبلاگ</a>
                        <a href="#" className="nav-item">تماس با ما</a>
                        <a href="#" className="nav-item">درباره ما</a>
                    </nav>
                </div>
            </div>

            {/* overlay */}
            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SidebarMenu;