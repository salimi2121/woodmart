import { useState, useEffect } from 'react';
import useProduct from '../../../../useProduct.js';
import OffPetHeader from './OffPetHeader';
import OffPetSlider from './OffPetSlider';
import ProductModal from './ProductModal';

export default function OffPetSection() {
  const { products, selectedProduct, setSelectedProduct } = useProduct();
  const [clickedHearts, setClickedHearts] = useState({});
 useEffect(() => {
    if(selectedProduct) {
      console.log('Modal opened with:', selectedProduct);
    }
  }, [selectedProduct]);



  const handleHeartClick = (itemId) => {
    setClickedHearts(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleSelectOptions = (product) => {
    setSelectedProduct(product);
  };



  return (
    <div className="bg-pink h-auto">
      <div className="off-pet mx-5 px-3 pt-3 pb-3 d-flex h-auto">
        <OffPetHeader />
        <div className="off-pet-left">
          <OffPetSlider
            products={products}
            clickedHearts={clickedHearts}
            onHeartClick={handleHeartClick}
            onSelectOptions={handleSelectOptions}
          />
        </div>
      </div>
 {selectedProduct && (
        <ProductModal 
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
