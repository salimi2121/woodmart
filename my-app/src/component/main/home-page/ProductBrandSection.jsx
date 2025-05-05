import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import imgright from '../../../assets/home-page/brand-section/r1.png'
import b1 from '../../../assets/home-page/brand-section/1.png'
import b2 from '../../../assets/home-page/brand-section/2.png'
import b3 from '../../../assets/home-page/brand-section/3.png'
import b4 from '../../../assets/home-page/brand-section/4.png'
import b5 from '../../../assets/home-page/brand-section/5.png'
import b6 from '../../../assets/home-page/brand-section/6.png'
import b7 from '../../../assets/home-page/brand-section/7.png'


export default function ProductBrandSection() {
    const items = [
        {
            id: 1,
            img: b1
        }, {
            id: 2,
            img: b2
        }, {
            id: 3,
            img: b3
        }, {
            id: 4,
            img: b4
        }, {
            id: 5,
            img: b5
        }, {
            id: 6,
            img: b6
        }, {
            id: 7,
            img: b7
        },
    ]
    return (
        <div className="brand-section bg-pink px-7 py-5">
            <div className="brand-items container-fluid d-flex gap-2 p-0 rounded-4 bg-white box-shadow-1">
                <div className="right-section d-flex text-white rounded-4 w-25 h-100">
                    <div className="right-content d-flex flex-column gap-2 bg-orange rounded-4 py-2 ps-3 position-relative">
                        <h2 className="fw-bolder fs-4">برندهای محصولات</h2>
                        <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</p>
                        <img src={imgright} alt="" className='position-absolute' />
                    </div>
                </div>
                <div className="left-section h-100">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={true}
                        slidesPerView={4}
                        spaceBetween={0}
                        autoHeight={true}
                        breakpoints={{
                            // تنظیمات ریسپانسیو
                            280: { slidesPerView: 1 },
                            450: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 6 },
                        }}
                    > {items?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="d-flex justify-content-center align-items-center ms-2 w-100 h-100 rounded-2"
                                style={{
                                    cursor: 'grab',
                                    userSelect: 'none',
                                }}
                            >
                                <div className="position-relative d-flex flex-column justify-content-center align-items-center gap-1 h-100">
                                    <div className="position-relative w-75 brand-img d-flex justify-content-center align-items-center pt-2">
                                        <img
                                            src={item.img || '/placeholder.jpg'}
                                            alt=''
                                            className="w-100 h-100 "                                      
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}