import React from 'react';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductInfoBox from './ProductInfoBox';
// import ProductPurchase from './ProductPurchase';
import ProductReview from './ProductReview';

// import Footer from './Footer';

export default function Food() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* تصویر محصول */}
        <div className="col-md-6 text-center">
          <img
            src="../assets/Cat-Food-Ragu-with-Lamb-Whiskas-1-12-Months.jpg"
            alt="cat food"
            className="img-fluid rounded"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* بخش توضیحات و اطلاعات */}
        <div className="col-md-6">
          <h2 className="mb-3">غذای خشک گربه نوع ۱</h2>
          <ul className="list-unstyled">
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
            <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
          </ul>

          <div className="d-flex justify-content-between my-2">
            <span>فروخته‌شده: ۸</span>
            <span>باقی‌مانده: ۱۰</span>
          </div>

          {/* نوار پیشرفت */}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              style={{ width: '85%' }}
              role="progressbar"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          {/* دکمه‌ها */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            <button className="btn btn-outline-secondary flex-fill">
              <i className="fas fa-random ms-2"></i>افزودن برای مقایسه
            </button>
            <button className="btn btn-outline-danger flex-fill">
              <i className="fas fa-heart ms-2"></i>افزودن به علاقه‌مندی
            </button>
          </div>

          <hr />

          <ProductInfo />
          <div className="row">
            <div className="col-md-4">
                <ProductInfoBox />
            </div>
            <div className="col-md-8">
                <ProductDescription />
            </div>
          </div>

         <ProductReview />
        </div>
      </div>

      {/* <Consultation />
     
      <ProductTabs />
      <PopularProducts />
      <Footer /> */}
    </div>
  );
}