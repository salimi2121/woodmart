import React, { useState } from 'react';
import useProduct from '../../../../useProduct.js';
import ProductModal from '../OffPetSection/ProductModal.jsx';
import CategoryTabs from './CategoryTabs';
import ProductsSlider from './ProductsSlider';

export default function BestSellingProductsSection() {
    const { products } = useProduct();
    const [clickedHearts, setClickedHearts] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = products?.length > 0
        ? [...new Set(products.map(item => item.category))]
        : [];

    const [selectedCategory, setSelectedCategory] = useState(
        categories.length > 0 ? categories[0] : null
    );
    const filteredProducts = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : [];

    const handleHeartClick = (itemId) => {
        setClickedHearts(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;

        setIsLoading(true);
        setOpacity(0);

        setTimeout(() => {
            setSelectedCategory(category);
            setTimeout(() => {
                setOpacity(1);
                setIsLoading(false);
            }, 500);
        }, 300);
    };

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!products || products.length === 0) {
        return <div className="p-4 text-center">محصولی یافت نشد</div>;
    }

    if (categories.length === 0) {
        return <div className="p-4 text-center">دسته‌بندی‌ای یافت نشد</div>;
    }

    return (
        <div className="">
            <div className="best-selling px-7">
                <CategoryTabs 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                
                <CategoryTabs 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    isMobile
                />

                <div className="position-relative d-flex justify-content-center align-items-center w-100">
                    <ProductsSlider
                        products={filteredProducts}
                        clickedHearts={clickedHearts}
                        onHeartClick={handleHeartClick}
                        onOpenModal={handleOpenModal}
                        isLoading={isLoading}
                        opacity={opacity}
                    />
                </div>
            </div>

            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}