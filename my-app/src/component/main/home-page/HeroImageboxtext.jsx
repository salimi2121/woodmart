import cat from '../../../assets/home-page/hero-section/h3.jpg'
export default function HeroImageboxtext() {
    return (
        <div className="image-box d-flex gap-3 gap-md-2 justify-content-center align-items-center ps-2 pe-md-0 text-white ">

            <div className="img-cat d-flex justify-content-center align-items-center text-white rounded-circle" style={{ backgroundColor: '#ffffff' }}>
                <img src={cat} alt="" className='rounded-circle' />
            </div>
            <p className="fs-6 fw-bold m-0 pe-4 ps-0">غذا های وودمارت خیییلی خوبن!</p>
        </div>
    )
}