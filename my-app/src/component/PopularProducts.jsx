import React from 'react';


export default function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "غذای خشک گربه نوع ۳",
      price: "۴۰۰,۰۰۰ تومان",
      image: "/images/products/cat-food3.jpg",
      rating: 0,
    },
    
  ];

  return (
    <div className="bg-white rounded shadow-sm p-3 mb-5">
      <h5 className="mb-4 text-end">محبوب‌ترین محصولات</h5>
      <div className="d-flex flex-wrap justify-content-end">
        {products.map(product => (
          <div key={product.id} className="card m-2" style={{ width: "160px" }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body p-2 text-end">
              <h6 className="card-title small mb-1">{product.name}</h6>
              <div className="mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="far fa-star text-warning small"></i>
                ))}
              </div>
              <p className="text-danger small">{product.price}</p>
              <div className="d-flex justify-content-between">
                <i className="fas fa-cart-plus small"></i>
                <i className="fas fa-search small"></i>
                <i className="fas fa-random small"></i>
                <i className="far fa-heart small"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}