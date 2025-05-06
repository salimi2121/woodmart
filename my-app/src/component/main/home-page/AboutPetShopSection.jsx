import line from '../../../assets/home-page/Reasons-to-buy/line-s2.png'
import img1 from '../../../assets/home-page/hero-section/h2.jpg'
import a1 from '../../../assets/home-page/about/1.jpg'
import a2 from '../../../assets/home-page/about/2.jpg'
import a3 from '../../../assets/home-page/about/3.jpg'
import ar from '../../../assets/home-page/about/ar.png'


export default function AboutPetShopSection() {
    return (
        <div className="position-relative about-section bg-pink overflow-hidden">
            <div className="position-absolute top-0 end-0 pt-4 pb-5 w-100 mw-100 overflow-hidden h-auto">
                <div className="about-items  px-7 pb-2 d-flex h-auto">
                    <div className="about-item1 w-15 d-flex flex-column gap-2 rounded-4 bg-white h-auto">
                        <h2 className="fs-5 text-center text-black fw-bolder ">برای دریافت <span className="text-success">مشاوره و راهنمایی </span>فرم زیر را تکمیل کنید</h2>
                        <div className="d-flex justify-content-center">
                            <img src={line} alt="" className='w-50' />
                        </div>
                        <form action="">
                            <label htmlFor="" className='text-secondary mb-2 fw-semibold'>ایمیل شما</label>
                            <input type="text" className="about-input1 rounded-pill w-100 border-secondary mb-3" />
                            <label htmlFor="" className='text-secondary mb-2 fw-semibold'>پیغام شما (اختیاری)</label>
                            <textarea name="" id="" className="about-textarea w-100 rounded-5 mb-3"></textarea>
                            <button className="text-white bg-orange rounded-5 px-3 py-2 fs-13 fw-bold border-0">ثبت</button>
                        </form>
                    </div>
                    <div className="about-item2 overflow-hidden d-flex justify-content-end">
                        <div className="hero-img col-xxl-4 col-xl-4 col-lg-4 col-md-4  col-sm-12 col-12 d-flex  align-items-center ">
                            <img src={img1} alt='' className="w-100 h-100" />
                        </div>
                    </div>
                    <div className="about-item3 d-flex flex-column gap-2 justify-content-center align-items-start pt-4 ">
                        <h2 className="fs-3 text-center fw-smibold text-black ">درباره پت شاپ  <span className="text-success">وودمارت</span></h2>
                        <div className="d-flex justify-content-start mt-2">
                            <img src={line} alt="" className='w-50' />
                        </div>
                        <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <div className="about-item d-flex gap-5 align-items-center rounded-4 bg-white w-100 mb-2 text-black p-2">
                            <div className="position-relative ">
                                <img src={a1} alt="" className='rounded-3 about-img' />
                                <img src={ar} alt="" className='about-img2 position-absolute ' />
                            </div>
                            <p className="text-black fw-semibold m-0"><span className="text-secondary">آدرس:</span> تهران، خیابان انقلاب، نبش کوچه سوم</p>
                        </div>
                        <div className="about-item d-flex gap-5 align-items-center rounded-4 bg-white w-100 mb-2 text-black p-2">
                            <div className="position-relative ">
                                <img src={a2} alt="" className='rounded-3 about-img' />
                                <img src={ar} alt="" className='about-img2 position-absolute ' />
                            </div>
                            <p className="text-black fw-semibold m-0"><span className="text-secondary">ایمیل: </span>yourmail@gmail.com</p>
                        </div>
                        <div className="about-item d-flex gap-5 align-items-center rounded-4 bg-white w-100 text-black p-2">
                            <div className="position-relative ">
                                <img src={a3} alt="" className='rounded-3 about-img' />
                                <img src={ar} alt="" className='about-img2 position-absolute ' />
                            </div>
                            <p className="text-black fw-semibold m-0"><span className="text-secondary">تلفن: </span>۰۹۱۲۳۴۵۶۷۸۹و ۰۹۱۲۳۴۵۶۷۸۹                          </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}