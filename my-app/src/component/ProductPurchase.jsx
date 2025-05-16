import React from 'react';

export default function ProductPurchase() {
  return (
    <div className="border rounded p-3 mt-4">
      {/* قیمت */}
      <h5 className="mb-3">
        <i className="fas fa-money-bill-wave ms-2"></i>
        قیمت محصول: <span className="text-success">۴۰۰,۰۰۰ تومان</span>
      </h5>

      {/* رنگ‌ها */}
      <div className="mb-3">
        <p className="fw-bold">رنگ:</p>
        <div className="d-flex gap-2">
          {['orange', 'red', 'green', 'blue'].map((color, index) => (
            <span
              key={index}
              className="rounded-circle border"
              style={{
                width: '25px',
                height: '25px',
                backgroundColor: color,
                cursor: 'pointer'
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* وزن‌ها */}
      <div className="mb-3">
        <p className="fw-bold">وزن:</p>
        <div className="d-flex flex-wrap gap-2">
          {['۱ کیلوگرم', '۲ کیلوگرم', '۳ کیلوگرم', '۵ کیلوگرم'].map((weight, idx) => (
            <button className="btn btn-outline-secondary btn-sm" key={idx}>
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* افزودن به سبد خرید */}
      <div className="mb-4">
        <button className="btn btn-warning w-100">افزودن به سبد خرید</button>
      </div>

      {/* مشاوره واتساپ و تلگرام */}
      <div className="text-center">
        <p className="fw-bold">برای دریافت مشاوره با ما در ارتباط باشید.</p>
        <div className="d-flex justify-content-center gap-2">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="btn btn-success">
            ارتباط در واتس‌اپ
          </a>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ارتباط در تلگرام
          </a>
        </div>
      </div>
    </div>
  );
}