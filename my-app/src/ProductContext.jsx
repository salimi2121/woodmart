import React, { createContext, useContext, useState } from 'react';
import img1 from './assets/home-page/products-context/g1.jpg'
import img2 from './assets/home-page/products-context/g2.jpg'
import img3 from './assets/home-page/products-context/g3.jpg'
import img4 from './assets/home-page/products-context/g4.jpg'
import img5 from './assets/home-page/products-context/g5.jpg'
import img6 from './assets/home-page/products-context/g6.jpg'


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setproducts] = useState([
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
    return (
        <ProductContext.Provider value={{ product, setproducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useData = () => useContext(ProductContext);
