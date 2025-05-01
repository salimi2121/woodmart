import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import f1 from "../../../assets/home-page/hero-section/h1.jpg";
import f2 from "../../../assets/home-page/hero-section/h2.jpg";
import bg1 from "../../../assets/home-page/hero-section/bg1.png";
import el1 from "../../../assets/home-page/hero-section/elements-1.png";
import { useEffect, useRef } from 'react';
import BtnShop from './BtnShop';
import FadeInUp from './FadeInUp';
import HeroImageboxtext from './HeroImageboxtext';
import HeroImagebox from './HeroImagebox';
import BtnContactUs from './BtnContactUs';
import HeaderHomepage from './header/HeaderHomepage';

export default function HeroSectionHomepage() {
    const items = [
        {
            id: 1,
            category: '',
            title: 'هدف وودمارت آسایش',
            title2: ' حیوانات خانگی شماست!',
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت.",
            image: f1,
            color: '#5c7882',
            textbtn: 'مشاهده محصولات',
            href: ''
        },
        {
            id: 2,
            category: '',
            title: 'باکیفیت ترین محصولات',
            title2: 'فقط با وودمارت',
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت.",
            image: f2,
            textbtn: 'همکاری با وودمارت',
            color: '#b09782',
            href: ''
        },
    ];
    const paginationRef = useRef(null);
    useEffect(() => {
        if (paginationRef.current) {
            const paginationBullets = paginationRef.current.querySelectorAll('.swiper-pagination-bullet');
            paginationBullets.forEach((bullet, index) => {
                bullet.innerHTML = `<span class="pagination-number">0${index + 1}</span><span class="pagination-line"></span>`;
            });
        }
    }, []);
    return (
        <div className=" hero-items container-fluid position-relative overflow-hidden" style={{ backgroundImage: `url(${bg1})`, backgroundColor: '#FFFAEE' }}>
            <HeaderHomepage />
            <div className="hero-swiper flex justify-content-center align-items-center w-100">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoHeight={true}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <FadeInUp>
                                <div className="swiper-items g-0 d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-center align-items-center gap-5 gap-lg-3 gap-md-3 w-100 h-100" style={{ padding: '10px 44px 10px 70px', cursor: 'grap', userSelect: 'none' }}>
                                    <div className="r-swiper col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 d-flex flex-column align-items-end justify-content-end" style={{ color: `${item.color}` }}>
                                        <div className="swiper-right position-relative d-flex flex-column gap-2 justify-content-start align-items-start  ">
                                            {item.id === 1 && <HeroImageboxtext />}
                                            {item.id === 2 && <HeroImagebox />}
                                            <h2 className="hero-h2 mt-2 lh-1 swiper-title1">{item.title}</h2>
                                            <h2 className="hero-h2 mt-2 lh-1 swiper-title2">{item.title2}</h2>
                                            <div className="position-absolute element-1">
                                                <img src={el1} alt="" className='w-100 h-100' />
                                            </div>
                                            <p className="hero-p ">{item.body}</p>
                                            <div className="hero-btn d-flex gap-3 ">
                                                <BtnShop title={item.textbtn} />
                                                {item.id === 1 && <BtnContactUs />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-img col-xxl-4 col-xl-4 col-lg-4 col-md-4  col-sm-12 col-12 d-flex  align-items-center ">
                                        <img src={item.image} alt={item.title} className="w-100 h-100" />
                                    </div>
                                </div>
                            </FadeInUp>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}