import React from 'react';

export default function ProductInfoBox() {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-4">
      <h6 className="mb-3">
        <i className="fas fa-info-circle ms-2"></i> اطلاعات محصول
      </h6>
      <p><strong>رنگ:</strong> آبی، سبز، قرمز، نارنجی</p>
      <p><strong>وزن:</strong> ۱ کیلوگرم، ۲ کیلوگرم، ۳ کیلوگرم، ۴ کیلوگرم</p>
    </div>
  );
}