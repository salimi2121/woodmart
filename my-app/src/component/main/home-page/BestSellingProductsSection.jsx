import React, { useState } from 'react';
import  useProduct  from '../../../useProduct.js';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdCheckmark } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { TfiShoppingCart } from "react-icons/tfi";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


export default function BestSellingProductsSection() {
    const { product } = useProduct();
    const [clickedHearts, setClickedHearts] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [opacity, setOpacity] = useState(1);

    const categories = product?.length > 0
        ? [...new Set(product.map(item => item.category))]
        : [];

    const [selectedCategory, setSelectedCategory] = useState(
        categories.length > 0 ? categories[0] : null
    );
    const filteredProduct = selectedCategory
        ? product.filter(item => item.category === selectedCategory)
        : [];

    const handleHeartClick = (itemId) => {
        setClickedHearts(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;

        // شروع transition
        setIsLoading(true);
        setOpacity(0);

        // تاخیر برای نمایش افکت
        setTimeout(() => {
            setSelectedCategory(category);
            // تاخیر برای نمایش loader
            setTimeout(() => {
                setOpacity(1);
                setIsLoading(false);
            }, 500);
        }, 300);
    };

    if (!product || product.length === 0) {
        return <div className="p-4 text-center">محصولی یافت نشد</div>;
    }

    if (categories.length === 0) {
        return <div className="p-4 text-center">دسته‌بندی‌ای یافت نشد</div>;
    }

    return (
        <div className="">
            <div className="best-selling px-7">
                <div className="best-selling-category d-flex gap-4 fw-bolder border-bottom border-2 mb-3">
                    <h2 className='category-h2 fs-4 fw-bolder border-bottom border-success border-2 pb-2'>پرفروش ترین محصولات </h2>
                    {categories.map(category => (
                        <div
                            type='button'
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`category-lg d-flex justify-content-center align-items-center pb-1 fw-bold ${selectedCategory === category ? 'text-success' : 'bg-white'}`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="category-mobail d-flex gap-4">
                {categories.map(category => (
                        <div
                            type='button'
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`d-flex justify-content-center align-items-center pb-1 fw-bold ${selectedCategory === category ? 'text-success' : 'bg-white'}`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="">
                    
                    
                        <div className="">
                            {filteredProduct.length > 0 ? (
                                <div className="position-relative d-flex justify-content-center align-items-center w-100">
                                    {isLoading ? (
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: '390px' }}>
                                            <div className="spinner-border text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ opacity: opacity, transition: 'opacity 0.9s ease-in-out', width: '100%' }}>
                                            <Swiper
                                                modules={[Navigation, Autoplay]}
                                                loop={true}
                                                autoplay={{
                                                    delay: 5000,
                                                    disableOnInteraction: false,
                                                }}
                                                navigation={{
                                                    nextEl: '.best-selling-button-next',
                                                    prevEl: '.best-selling-button-prev',
                                                }}
                                                slidesPerView={5}
                                                spaceBetween={0}
                                                autoHeight={true}
                                                breakpoints={{
                                                    280: { slidesPerView: 1 },
                                                    450: { slidesPerView: 2 },
                                                    768: { slidesPerView: 3 },
                                                    992: { slidesPerView: 4 },
                                                    1090: { slidesPerView: 5 },
                                                }}
                                            >
                                                {filteredProduct?.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            className="off-swiper-items g-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-2"
                                                            style={{
                                                                padding: '10px ',
                                                                cursor: 'grab',
                                                                userSelect: 'none',
                                                                height: '390px'
                                                            }}
                                                        >
                                                            <div className="swiper-item position-relative d-flex flex-column justify-content-center align-items-center gap-1 p-2 bg-white rounded-4">
                                                                <div className="position-relative swiper-image-container p-2 w-100">
                                                                    <img
                                                                        src={item.image || '/placeholder.jpg'}
                                                                        alt={item.title || ''}
                                                                        className="w-100 h-100 object-fit-cover"
                                                                        onError={(e) => {
                                                                            e.target.src = '/placeholder.jpg';
                                                                        }}
                                                                    />
                                                                    <div
                                                                        className="btn-heart d-none position-absolute p-2 fs-5 bg-white rounded-circle text-black"
                                                                        onClick={() => handleHeartClick(item.id)}
                                                                    >
                                                                        {clickedHearts[item.id] ? <IoMdCheckmark /> : <IoMdHeartEmpty />}
                                                                    </div>
                                                                </div>
                                                                <h2 className=" text-black fs-6 fw-light f-vazir-fanum">{item.title}</h2>
                                                                <div className="d-flex text-secondary "><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></div>
                                                                <p className='f-vazir-fanum text-orange fw-semibold'>تومان{item.price}</p>
                                                                <a href={item.link} className="btn-select bg-orange rounded-5 py-2 px-2 mb-2 text-white fs-11 fw-bolder">
                                                                    
                                                                    <span className="text-select fs-14">انتخاب گزینه ها</span>
                                                                    <div className="icon-select text-white m-0 p-0 "><TfiShoppingCart size={21} /></div>

                                                                </a>
                                                                <div className="off-buttons d-flex flex-column gap-2 position-absolute text-black fs-4 p-3 py-2 opacity-0 rounded-3 bg-white">
                                                                    <div className="user-select-all"
                                                                        data-tooltip-id="product-actions-tooltip"
                                                                        data-tooltip-content="افزودن برای مقایسه">
                                                                        <MdOutlineCompareArrows />
                                                                    </div>
                                                                    <div className=""
                                                                        data-tooltip-id="product-actions-tooltip"
                                                                        data-tooltip-content="جستجوی سریع">
                                                                        <IoSearchOutline />
                                                                    </div>
                                                                    <div className="" data-tooltip-id="product-actions-tooltip"
                                                                        data-tooltip-content="افزودن به علاقه‌مندی‌">
                                                                        <IoMdHeartEmpty />
                                                                    </div>
                                                                </div><Tooltip
                                                                    id="product-actions-tooltip"
                                                                    place="right"
                                                                    effect="solid"
                                                                    className="z-1050 bg-black rounded-3 d-flex justify-content-center align-items-center" 
                                                                    delayShow={300} // تاخیر قبل از نمایش
                                                                    delayHide={200} // تاخیر قبل از پنهان شدن
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    )}
                                    {!isLoading && (
                                        <>
                                            <div className="best-selling-button-prev fs-1 ">
                                                <FiChevronRight />
                                            </div>
                                            <div className="best-selling-button-next fs-1 ">
                                                <FiChevronLeft />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <p>No items available in this category.</p>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}