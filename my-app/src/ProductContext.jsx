import React, { createContext, useState, useEffect } from 'react';
import img1 from './assets/home-page/products-context/g1.jpg'
import img2 from './assets/home-page/products-context/g2.jpg'
import img3 from './assets/home-page/products-context/g3.jpg'
import img4 from './assets/home-page/products-context/g4.jpg'
import img5 from './assets/home-page/products-context/g5.jpg'
import img6 from './assets/home-page/products-context/g6.jpg'


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 1',
            image: img1,
            price: '400000',
            link: ''
        },
        {
            id: 2,
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 2',
            image: img2,
            price: '400000',
            link: ''
        }, {
            id: 3,
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 3',
            image: img3,
            price: '400000',
            link: ''
        }, {
            id: 4,            
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 4',
            image: img4,
            price: '400000',
            link: ''
        }, {
            id: 5,
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 5',
            image: img5,
            price: '400000',
            link: ''
        }, {
            id: 6,
            category: 'غذای گربه',
            title: 'غذای خشک گربه نوع 6',
            image: img6,
            price: '400000',
            link: ''
        },
        {
            id: 7,
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 1',
            image: img1,
            price: '400000',
            link: ''
        },
        {
            id: 8,
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 2',
            image: img2,
            price: '400000',
            link: ''
        }, {
            id: 9,
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 3',
            image: img3,
            price: '400000',
            link: ''
        }, {
            id: 10,            
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 4',
            image: img4,
            price: '400000',
            link: ''
        }, {
            id: 11,
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 5',
            image: img5,
            price: '400000',
            link: ''
        }, {
            id: 12,
            category: 'غذای پرندگان',
            title: 'غذای خشک گربه نوع 6',
            image: img6,
            price: '400000',
            link: ''
        }, {
            id: 13,
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 1',
            image: img1,
            price: '400000',
            link: ''
        },
        {
            id: 14,
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 2',
            image: img2,
            price: '400000',
            link: ''
        }, {
            id: 15,
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 3',
            image: img3,
            price: '400000',
            link: ''
        }, {
            id: 16,            
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 4',
            image: img4,
            price: '400000',
            link: ''
        }, {
            id: 17,
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 5',
            image: img5,
            price: '400000',
            link: ''
        }, {
            id: 18,
            category: 'غذای ماهی',
            title: 'غذای خشک گربه نوع 6',
            image: img6,
            price: '400000',
            link: ''
        },
        {
            id: 19,
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 1',
            image: img1,
            price: '400000',
            link: ''
        },
        {
            id: 20,
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 2',
            image: img2,
            price: '400000',
            link: ''
        }, {
            id: 21,
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 3',
            image: img3,
            price: '400000',
            link: ''
        }, {
            id: 22,            
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 4',
            image: img4,
            price: '400000',
            link: ''
        }, {
            id: 23,
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 5',
            image: img5,
            price: '400000',
            link: ''
        }, {
            id: 24,
            category: 'غذای سگ',
            title: 'غذای خشک گربه نوع 6',
            image: img6,
            price: '400000',
            link: ''
        },
    ])

   const [cartItems, setCartItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
 
 // بارگذاری سبد خرید از localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // ذخیره سبد خرید در localStorage هنگام تغییر
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // افزودن به سبد خرید
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // بررسی وجود محصول مشابه در سبد
      const existingItem = prevItems.find(item => 
        item.id === product.id && 
        item.color === product.color && 
        item.weight === product.weight
      );

      if (existingItem) {
        // افزایش تعداد اگر موجود باشد
        return prevItems.map(item =>
          item.id === product.id && 
          item.color === product.color && 
          item.weight === product.weight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // افزودن جدید اگر موجود نباشد
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // حذف از سبد خرید
  const removeFromCart = (productId, color, weight) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === productId && 
          item.color === color && 
          item.weight === weight)
      )
    );
  };

  // تغییر تعداد محصول در سبد خرید
  const updateCartItemQuantity = (productId, color, weight, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, color, weight);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && 
        item.color === color && 
        item.weight === weight
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // محاسبه جمع کل سبد خرید
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  // تعداد کل آیتم‌های سبد خرید
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

 // موجودی انبار
  const stockInfo = {
    'قرمز': { '1 کیلوگرم': 5, '2 کیلوگرم': 3, '3 کیلوگرم': 2, '4 کیلوگرم': 1 },
    'آبی': { '1 کیلوگرم': 7, '2 کیلوگرم': 4, '3  کیلوگرم': 3, '4 کیلوگرم': 2 },
    'سبز': { '1 کیلوگرم': 4, '2 کیلوگرم': 2, '3  کیلوگرم': 1, '4 کیلوگرم': 0 },
    'مشکی': { '1 کیلوگرم': 8, '2 کیلوگرم': 5, '3  کیلوگرم': 3, '4 کیلوگرم': 2 },
    'آجری': { '1 کیلوگرم': 6, '2 کیلوگرم': 4, '3  کیلوگرم': 2, '4 کیلوگرم': 1 }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        cartTotal,
        cartItemsCount,
        stockInfo,
        selectedProduct,
        selectedColor,
        selectedWeight,
        setSelectedProduct,
        setSelectedColor,
        setSelectedWeight,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;