import text from '../../../assets/home-page/woodmart-app/t1.png'
import line from '../../../assets/home-page/Reasons-to-buy/line-s2.png'
import img from '../../../assets/home-page/woodmart-app/m.png'
import bazar from '../../../assets/home-page/woodmart-app/bazar.png'
import myket from '../../../assets/home-page/woodmart-app/myket.png'


export default function WoodmartAppSection() {
    return (
        <div className="">
            <div className="app-section py-5 px-7">
                <div className="d-flex flex-column gap-2 px-2">
                    <div className="app-text pt-5 d-flex ">
                        <img src={text} alt="" className='w-57' />
                    </div>
                    <div className="">
                        <div className="app-content position-relative d-flex justify-content-center align-items-start gap-5 py-4 rounded-5" >
                            <div className="app-item1 d-flex flex-column justify-content-start align-items-start gap-1 py-2">
                                <h2 className="text-white fs-5 fw-bolder ">یک شعبه از وودمارت در تلفن شماست!</h2>
                                <div className="app-line">
                                    <img src={line} alt="" className='w-100' />
                                </div>
                                <p className="app-content-p w-60 fs-6 ">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>

                                <div className="app-icons d-flex gap-3">
                                    <div className="app-icon bg-white rounded-5 px-3 py-2">
                                        <a href="" className="text-success d-flex gap-2 align-items-center justify-content-center " >
                                            <span>دریافت از بازار</span>
                                            <div className='w-20 h-25 rounded-circle '><img src={bazar} alt="" className='w-100 h-100' /></div>

                                        </a>
                                    </div>
                                    <div className="app-icon bg-white rounded-5 px-3 py-2">
                                        <a href="" className="text-success d-flex gap-2 align-items-center justify-content-center" >
                                            <span>دریافت از مایکت</span>
                                            <div className='w-10 h-25 rounded-circle'><img src={myket} alt="" className='w-100 h-100' /></div>

                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="app-img position-absolute ">
                                <img src={img} alt="" className='w-100 h-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}