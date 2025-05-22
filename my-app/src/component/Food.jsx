import React from 'react';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductInfoBox from './ProductInfoBox';
// import ProductPurchase from './ProductPurchase';
import ProductReview from './ProductReview';

// import Footer from './Footer';

export default function Food() {
  return (
    <div className="container my-5 ">
      <span className='d-flex'>
        <a href="#">خانه/</a>
        <a href="#">غذای گربه/</a>
        <p style={{color:'black'}}>غذای خشک گربه نوع 1</p>
      </span>

      <div className="row first-box">
        {/* تصویر محصول */}
        <div className="col-md-4 text-center">
          <img
            src="../src/assets/Cat-Food-Ragu-with-Lamb-Whiskas-1-12-Months.jpg"
            alt="cat food"
            className="img-fluid rounded"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* بخش توضیحات و اطلاعات */}
        <div className="col-md-4">
          <h2 className="mb-3">غذای خشک گربه نوع ۱</h2>
          <ul className="list-unstyled">
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
          </ul>
          <div className='progress-box'>
            <div className="d-flex justify-content-between my-2">
              <span>فروخته‌شده: ۸</span>
              <span>باقی‌مانده: ۱۰</span>
            </div>

            {/* نوار پیشرفت */}
            
            <div className="progress mb-3 ">
              <div
                className="progress-bar bg-warning"
                style={{ width: '85%'}}
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          {/* دکمه‌ها */}
          <div className="d-flex flex-wrap gap-2 mb-3 ">
          <button className="btn btn-outline-success flex-fill">
              <i className="fas fa-heart ms-2"></i>افزودن به علاقه‌مندی
            </button>
            <button className="btn btn-outline-secondary flex-fill">
              <i className="fas fa-random ms-2"></i>افزودن برای مقایسه
            </button>
            
            
          </div>
          <hr />

          <div>
          <p>
            شناسه محصول: <span className="text-muted">نا‌معلوم</span>
          </p>
          <p>
            دسته: <span className="text-muted">غذای گربه</span>
          </p>

          </div>
          
        </div>

          <div className="col-md-4 text-center">
            <span>اشتراک گذاری</span>


            <div className="price-box">
              <span style={{fontSize: '25px'}}>قیمت محصول <i></i></span>
              <h4>400.000 تومان</h4>
              <p style={{margin: '20px '}}>رنگ</p>
              <span style={{margin: '20px '}}>
                <a href="#" className='blue'>.....</a>
                <a href="#" className='green'>.....</a>
                <a href="#" className='red'>.....</a>
                <a href="#" className='orange'>.....</a>
              </span>
              <p style={{margin: '20px '}}>وزن</p>
              <span style={{margin: '20px '}}>
                <a href="#" className='kilogram'>1کیلوگرم</a>
                <a href="#" className='kilogram'>2کیلوگرم</a>
                <a href="#" className='kilogram'>3کیلوگرم</a>
                <a href="#" className='kilogram'>4کیلوگرم</a>
              </span>
              <div className="shop-button">
                <button type='button' className='btn-orange '>افزودن به سبد خرید</button>
              </div>
            </div>
            <div className="contact-box ">
                <p>برای دریافت مشاوره با ما در ارتباط باشید.</p>
                <div className="d-flex justify-content-center ">
                  <a href="#" className='btn-whatsup'> ارتباط در واتس اپ  </a>
                  <a href="#" className='btn-telegram'> ارتباط در  تلگرام  </a>
                </div>
            </div>
          </div>
          
        
          

        
      </div>



      <div className='row mb-3 mt-3 second-box'>

        <div className="col-md-8">
          <ProductDescription />
        </div>

        <div className="col-md-4">
          <ProductInfoBox />
        </div>

      </div>

      <div className="row">
            
      </div>

      <div className="row third-box">
        <div className="col-md-12">
          <ProductReview />
        </div>
      </div>

      <div className="row fourth-box">
        <div className="col-md-3">
          <h3>محبوب ترین محصولات</h3>
          <div className='product-box '>
            <div>
              <img src="../src/assets/Cat-3-Favorites.jpg" alt="food-3" className='img3' />
            </div>
            <div>
              <a>غذای خشک گربه نوع 3</a>
            </div>
            <div id="rating">
              {Array.from({ length: 5 }).map((_, idx) => (
                <i key={idx} className="far fa-star  me-1 star"></i>
              ))}
            </div>
            <p className='org-price'>400,000 تومان</p>
          </div>
        </div>
      </div>

          
      
         


    </div>
      
/* 
      <Consultation />
     
      <ProductTabs />
      <PopularProducts />
      <Footer /> */
    
  );
}