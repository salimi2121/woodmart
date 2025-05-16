import React from 'react';

export default function ProductReview() {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-4">
      <h6 className="mb-3">
        <i className="fas fa-comments ms-2"></i> توضیحات محصول
      </h6>
      <p className="mb-2"><strong>نقد و بررسی‌ها</strong></p>
      <p className='text-muted'>هنوز بررسی‌ای ثبت نشده است. اولین کسی باشید که دیدگاهی می‌نویسد “غذای خشک گربه نوع ۱”</p>

      <hr />

      <form>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">امتیاز شما:</label>
          <div id="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
              <i key={idx} className="far fa-star text-warning me-1"></i>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">دیدگاه شما:</label>
          <textarea id="comment" className="form-control" rows="3" />
        </div>

        <button type="submit" className="btn btn-primary">ثبت دیدگاه</button>
      </form>
    </div>
  );
}