import React from 'react';

export default function ProductReview() {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-4">
      <h6 className="mb-3">
        <i className="fas fa-comments ms-2"></i> توضیحات محصول
      </h6>
      <p className="mb-2"><strong>نقد و بررسی‌ها</strong></p>
      <p className='text-muted'>هنوز بررسی‌ای ثبت نشده است. </p>
      <p style={{color:'#636363' , fontSize:'20px ', fontWeight:'bold'}}>اولین کسی باشید که دیدگاهی می‌نویسد “غذای خشک گربه نوع ۱”</p>
      <p>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند  <span style={{color:'red'}}>*</span></p>

     

      <form>
        <div className="mb-3 d-flex">
          <label htmlFor="rating" className="form-label">امتیاز شما:</label>
          <div id="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
              <i key={idx} className="far fa-star text-warning me-1"></i>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">دیدگاه شما:</label>
          <textarea id="comment" className="form-control" rows="8" />
        </div>

        <div className='info d-flex'>
          <div className='col-md-6'>
            <label htmlFor="name" className='form-label'>نام <span style={{color:'red'}}>*</span></label>
            <input type="text" />
          </div>

          <div className='col-md-6'>
            <label htmlFor="email" className='form-label'>ایمیل <span style={{color:'red'}}>*</span></label>
            <input type="email" />
          </div>
        </div>

        <div className="check-box d-flex">
          <input type="checkbox" name="check-box" id="#"  className='checkbox'/>
          <span style={{marginTop:'5px ', color:'#838383'}}> ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</span>
        </div>

        <button type="submit" className="btn  submit">ثبت </button>
      </form>
    </div>
  );
}