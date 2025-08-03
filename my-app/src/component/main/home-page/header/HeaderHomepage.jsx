import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import h1 from '../../../../assets/home-page/header/h1.png'
import CartIcon from "./CartIcon";
import SidebarMenu from "./SidebarMenu";

export default function HeaderHomepage(){
    return(
        <div className="header-homepage">
            <div className="header-upper d-flex justify-content-between align-items-center" style={{backgroundColor: 'rgba(34, 25, 77, 0)'}}>
                <div className="h-upper-right d-flex gap-3 justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M18.3084 15.775C18.3084 16.075 18.2417 16.3833 18.1001 16.6833C17.9584 16.9833 17.7751 17.2667 17.5334 17.5333C17.1251 17.9833 16.6751 18.3083 16.1667 18.5167C15.6667 18.725 15.1251 18.8333 14.5418 18.8333C13.6918 18.8333 12.7834 18.6333 11.8251 18.225C10.8667 17.8167 9.90842 17.2667 8.95842 16.575C8.00008 15.875 7.09175 15.1 6.22508 14.2417C5.36675 13.375 4.59175 12.4667 3.90008 11.5167C3.21675 10.5667 2.66675 9.61666 2.26675 8.67499C1.86675 7.72499 1.66675 6.81666 1.66675 5.94999C1.66675 5.38332 1.76675 4.84166 1.96675 4.34166C2.16675 3.83332 2.48341 3.36666 2.92508 2.94999C3.45841 2.42499 4.04175 2.16666 4.65842 2.16666C4.89175 2.16666 5.12508 2.21666 5.33342 2.31666C5.55008 2.41666 5.74175 2.56666 5.89175 2.78332L7.82508 5.50832C7.97508 5.71666 8.08342 5.90832 8.15842 6.09166C8.23342 6.26666 8.27508 6.44166 8.27508 6.59999C8.27508 6.79999 8.21675 6.99999 8.10008 7.19166C7.99175 7.38332 7.83342 7.58332 7.63342 7.78332L7.00008 8.44166C6.90842 8.53332 6.86675 8.64166 6.86675 8.77499C6.86675 8.84166 6.87508 8.89999 6.89175 8.96666C6.91675 9.03332 6.94175 9.08332 6.95842 9.13332C7.10842 9.40832 7.36675 9.76666 7.73342 10.2C8.10842 10.6333 8.50842 11.075 8.94175 11.5167C9.39175 11.9583 9.82508 12.3667 10.2667 12.7417C10.7001 13.1083 11.0584 13.3583 11.3417 13.5083C11.3834 13.525 11.4334 13.55 11.4917 13.575C11.5584 13.6 11.6251 13.6083 11.7001 13.6083C11.8417 13.6083 11.9501 13.5583 12.0417 13.4667L12.6751 12.8417C12.8834 12.6333 13.0834 12.475 13.2751 12.375C13.4667 12.2583 13.6584 12.2 13.8667 12.2C14.0251 12.2 14.1917 12.2333 14.3751 12.3083C14.5584 12.3833 14.7501 12.4917 14.9584 12.6333L17.7168 14.5917C17.9334 14.7417 18.0834 14.9167 18.1751 15.125C18.2584 15.3333 18.3084 15.5417 18.3084 15.775Z" stroke="#00AE61"></path><path d="M15.4167 7.99998C15.4167 7.49998 15.025 6.73331 14.4417 6.10831C13.9083 5.53331 13.2 5.08331 12.5 5.08331" stroke="#C5A498" ></path><path d="M18.3333 7.99999C18.3333 4.77499 15.725 2.16666 12.5 2.16666" stroke="#C5A498" ></path></svg>
                    <h3 className="fs-6">
                        <span style={{color:'#9F9F9F'}}>دریافت مشاوره و راهنمایی:<strong style={{color: '#686868'}}>۰۹۱۲۳۴۵۶۷۸۹ </strong>
                         </span>
                    </h3>
                </div>
                <div className="h-upper-left pb-2 pe-1 d-flex justify-content-center align-items-center gap-2">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><SiX /></a>
                    <a href=""><IoLogoInstagram /></a>
                    <a href=""><FaYoutube /></a>
                    <a href=""><FaPinterest /></a>
                </div>
            </div>
            <div className="header-bottom p-4 bg-white d-flex justify-content-between align-items-center">
                <div className="sidebar"><SidebarMenu /></div>
                <div className="h-bottom-right">
                    <a href=""><img src={h1} alt="" className="w-100 h-100"/></a>
                </div>
                <div className="h-menu d-flex justify-content-center align-items-center gap-3">
                    <a href="" className="home-link">خانه</a>
                    <a href="#" className="">
                            <span className='nav-item-span'>فروشگاه</span></a>
                        <a href="#" className="">
                            <span className='nav-item-span'>وبلاگ</span>
                        </a>
                        <a href="#" className="">
                            <span className='nav-item-span'>تماس با ما</span>
                        </a>
                        <a href="#" className="">
                            <span className='nav-item-span'>درباره ما</span>
                        </a>
                </div>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                    <div className="">
                        <a href=""><span className="h-sing-in">ورود / ثبت نام</span></a>
                    </div>
                    <div className=""><CartIcon /></div>
                </div>
            </div>
        </div>
    )
}