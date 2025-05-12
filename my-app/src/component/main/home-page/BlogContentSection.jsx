import { useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Tooltip } from 'react-tooltip';
import CommentIconBlog from './CommentIconBlog';
import img1 from '../../../assets/home-page/Blog-content-section/w1.jpg'
import img2 from '../../../assets/home-page/Blog-content-section/w2.jpg'
import img3 from '../../../assets/home-page/Blog-content-section/w3.jpg'
import img4 from '../../../assets/home-page/Blog-content-section/w4.jpg'
import img5 from '../../../assets/home-page/Blog-content-section/w5.jpg'
import line from '../../../assets/home-page/Reasons-to-buy/line-s2.png'
import usericon from '../../../assets/home-page/Blog-content-section/user.jpg'


export default function BlogContentSection() {
    const items = [
        {
            id: 1,
            category: '',
            title: 'انواع نژادهای سگ',
            image: img1,
            date: new Date(2025, 11, 31),
            day: '31',
            month: 'دسامبر',
            price: '',
            link: ''
        }, {
            id: 2,
            category: '',
            title: 'انواع غذاهای گربه ها',
            image: img2,
            date: new Date(2025, 11, 31),
            day: '31',
            month: 'دسامبر',
            price: '',
            link: ''
        }, {
            id: 3,
            category: '',
            title: 'راهنمای نگهداری از گربه ',
            image: img3,
            date: new Date(2025, 11, 31),
            day: '31',
            month: 'دسامبر',
            price: '',
            link: ''
        }, {
            id: 4,
            category: '',
            title: 'راهنمای نگهداری عروس هلندی',
            image: img4,
            date: new Date(2025, 11, 31),
            day: '31',
            month: 'دسامبر',
            price: '',
            link: ''
        }, {
            id: 5,
            category: '',
            title: 'انواع نژادهای گربه ها ',
            image: img5,
            date: new Date(2025, 11, 31),
            day: '31',
            month: 'دسامبر',
            price: '',
            link: ''
        },
    ]
    const toPersianNumber = (num) =>
        num?.toString().replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

    return (
        <div className="blog-section bg-pink">
            <div className="blog-content px-7 py-1">
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                    <div className="w-100 d-flex">
                        <div className="d-flex justify-content-between w-100 flex-column">
                            <h2 className="fs-5 fw-bolder">مطالب وبلاگ</h2>
                            <div className="app-line">
                                <img src={line} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="btn-blog d-flex justify-content-center align-items-center bg-orange px-2 pb-1 rounded-5">
                            <a href="" className="text-white text-center"> اینجا کلیک کنید</a>
                        </div>

                    </div>
                    <div className="w-100 d-flex overflow-hidden ">
                        <div className="position-relative blog-swiper flex justify-content-center align-items-center w-100">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 5000000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: '.blog-swiper-button-next',
                                    prevEl: '.blog-swiper-button-prev',
                                }}
                                slidesPerView={4}
                                spaceBetween={0}
                                autoHeight={true}
                                breakpoints={{
                                    // تنظیمات ریسپانسیو
                                    280: { slidesPerView: 1 },
                                    450: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1090: { slidesPerView: 4 },
                                }}
                            >
                                {items?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="blog-swiper-items g-0 d-flex justify-content-center align-items-center ms-2 w-100 h-100 rounded-2"
                                            style={{
                                                padding: '10px 10px 15px 10px',
                                                cursor: 'grab',
                                                userSelect: 'none',
                                                height: '400px',
                                                marginBottom: '2px'
                                            }}
                                        >
                                            <div className="blog-swiper-item position-relative d-flex flex-column  justify-content-center align-items-center gap-1 bg-white rounded-4">
                                                <div className="overflow-hidden position-relative swiper-image-container rounded-top-4 mb-2 w-100">
                                                    <img
                                                        src={item.image || '/placeholder.jpg'}
                                                        alt={item.title || ''}
                                                        className="transition-transform img-blog overflow-hidden w-100 h-100 object-fit-cover rounded-top-4"
                                                    />
                                                    <div className="overlay-img  d-flex gap-2 justify-content-center align-items-center w-100 h-100 rounded-top-4">

                                                        <div className="circle"></div>
                                                        <div className="circle"></div>
                                                        <div className="circle"></div>

                                                    </div>
                                                    <div className="position-absolute mt-2 me-2 d-flex flex-column align-items-center top-0 bg-white rounded-2 px-2 py-1 fs-14 fw-bold f-vazir-fanum">
                                                        {/* <span>
                                                            {item.date.toLocaleDateString('fa-IR', { day: 'numeric' })}
                                                        </span>
                                                        {item.date.toLocaleDateString('fa-IR', { month: 'long' })} */}

                                                        <span className='fs-5 f-vazir-fanum'>{toPersianNumber(item.day)}</span>{item.month}
                                                    </div>


                                                </div>
                                                <div className="btn2-blog position-absolute  mx-5">
                                                    <a href={item.link} className=" bg-orange rounded-3 py-1 px-2 text-white fs-11 fw-bolder">
                                                        <span className="text-select fs-14">دسته بندی نشده</span>
                                                    </a>
                                                </div>
                                                <h2 className=" text-black fs-14 fw-semibold mt-3">{item.title}</h2>
                                                <div className="d-flex gap-3 justify-content-center align-items-center  text-secondary">
                                                    <div className="user-blog d-flex gap-2 align-items-center ">
                                                        <div className=" rounded-circle">
                                                            <img src={usericon} alt="" className='w-100 h-100 rounded-circle' />
                                                        </div>
                                                        <a href="" className="fs-14">Admina </a>
                                                    </div>
                                                    <div className="">
                                                        <a href="" className="">

                                                            <CommentIconBlog commentCount={0} />
                                                        </a>
                                                    </div>
                                                    <div className="" data-tooltip-id="product-actions-tooltip"
                                                        data-tooltip-content="افزودن به علاقه‌مندی‌">
                                                        <a href="" className="">
                                                            <svg version="1.1" id="Layer_1" width="17px" height="17px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                                                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="51"
                                                                        cy="13" r="12"></circle> <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="11" cy="42" r="10"></circle> <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="48" cy="55" r="8"></circle> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="40" y1="54" x2="20" y2="46"></line> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="19" y1="35" x2="41" y2="21"></line> </g></svg>

                                                        </a>
                                                    </div><Tooltip
                                                        id="product-actions-tooltip"
                                                        place="right"
                                                        effect="solid"
                                                        className="z-1050 bg-black rounded-3 d-flex justify-content-center align-items-center"
                                                        delayShow={300} // تاخیر قبل از نمایش
                                                        delayHide={200} // تاخیر قبل از پنهان شدن
                                                    />


                                                </div>
                                                <div className="pb-4">
                                                    <a href="" className="text-orange fs-14 fw-bold">ادامه مطلب</a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="blog-swiper-button-prev fs-1 ">
                                <FiChevronRight />
                            </div>
                            <div className="blog-swiper-button-next fs-1 ">
                                <FiChevronLeft />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}