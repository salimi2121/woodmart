import React from 'react';

export default function ProductDescription() {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-4">
      <h6 className="mb-3">
        <i className="fas fa-align-right ms-2"></i> توضیحات محصول
      </h6>
      <p className="text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
      </p>
    </div>
  );
}