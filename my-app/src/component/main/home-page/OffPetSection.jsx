import { useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../../assets/home-page/off-pet/off1.png'
import img5 from '../../../assets/home-page/off-pet/5.jpg'
import img6 from '../../../assets/home-page/off-pet/6.jpg'
import { IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdCheckmark } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function OffPetSection() {
    const items = [
        {
            id: 1,
            category: '',
            title: 'غذای گربه',
            image: img5,
            price: '400',
            link: ''
        },
        {
            id: 2,
            category: '',
            title: 'غذای گربه',
            image: img6,
            price: '400',
            link: ''
        }, {
            id: 2,
            category: '',
            title: 'غذای گربه',
            image: img6,
            price: '400',
            link: ''
        }, {
            id: 2,
            category: '',
            title: 'غذای گربه',
            image: img6,
            price: '400',
            link: ''
        },
    ];
    const [clickedHearts, setClickedHearts] = useState({});

    const handleHeartClick = (itemId) => {
      setClickedHearts(prev => ({
        ...prev,
        [itemId]: !prev[itemId]
      }));
    };
    return (
        <div className="bg-pink h-auto">
            <div className="off-pet mx-5 px-3 pt-3 pb-5 d-flex h-auto">
                <div className="off-pet-right position-relative d-flex flex-column gap-2 justify-content-start align-items-center p-2 mt-3  rounded-5">
                    <h2 className="text-white text-center aligne-justify">آف پــــت وودمارت</h2>
                    <a href="" className="text-success bg-white rounded-3 px-3 py-2 fs-6 ">اینجا کلیک کنید</a>
                    <div className="off-img1 position-absolute ">
                        <img src={img1} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className="off-pet-left ">
                    <div className="position-relative flex justify-content-center align-items-center w-100">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            autoplay={true}
                            navigation={{
                                nextEl: '.off-swiper-button-next',
                                prevEl: '.off-swiper-button-prev',
                            }}
                            slidesPerView={4}
                            spaceBetween={0}
                            autoHeight={true}
                            breakpoints={{
                                // تنظیمات ریسپانسیو
                                280: { slidesPerView: 1 }, 
                                450: { slidesPerView: 2 }, 
                                768: { slidesPerView: 3 }, 
                                992: { slidesPerView: 4 }, 

                            }}
                        >
                            {items?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="off-swiper-items g-0 d-flex justify-content-center align-items-center ms-2 w-100 h-100 rounded-2"
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
                                            <h2 className=" text-black fs-6 fw-light">{item.title}</h2>
                                            <div className="d-flex text-secondary "><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></div>
                                            <p className='f-vazir-fanum'>تومان{item.price}</p>
                                            <a href={item.link} className="bg-orange rounded-4 py-2 px-3 mb-2 text-white fs-11 fw-bolder">
                                                انتخاب گزینه ها
                                            </a>
                                            <div className="off-buttons d-flex flex-column gap-2 position-absolute text-black fs-4 p-3 py-2 opacity-0 rounded-3 bg-white">
                                                <div className=""><MdOutlineCompareArrows /></div>
                                                <div className=""><IoSearchOutline /></div>
                                                <div className=""><IoMdHeartEmpty /></div>

                                            </div>
                                           
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="off-swiper-button-prev fs-1 ">
                            <FiChevronRight />
                        </div>
                        <div className="off-swiper-button-next fs-1 ">
                            <FiChevronLeft />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
