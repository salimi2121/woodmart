import React from 'react';

export default function ProductInfoBox() {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-4">
      <h6 className="mb-3">
        <i className="fas fa-info-circle ms-2"></i> اطلاعات محصول
      </h6>
      <p><span style={{color:'#B1B1B1'}}>رنگ:</span > آبی، سبز، قرمز، نارنجی</p>
      <hr />
      <p><span style={{color:'#B1B1B1'}}>وزن:</span> ۱ کیلوگرم، ۲ کیلوگرم، ۳ کیلوگرم، ۴ کیلوگرم</p>
    </div>
  );
}