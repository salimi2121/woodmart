import cat from '../../../assets/home-page/hero-section/h3.jpg'
export default function HeroImagebox() {
    return (

        <div className="img-cat d-flex justify-content-center align-items-center text-white rounded-circle" style={{ backgroundColor: '#ffffff' }}>
            <img src={cat} alt="" className='rounded-circle' />
        </div>
    )
}