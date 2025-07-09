import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import  useProduct  from '../../../../useProduct.js';

export default function ProductModal({ onClose }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const { addToCart, selectedProduct, stockInfo } = useProduct();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedWeight) return;
    
    addToCart({
      ...selectedProduct,
      color: selectedColor,
      weight: selectedWeight
    });
    
    onClose();
  };

  const handleRemoveWeight = () => {
    setSelectedWeight('');
    setSelectedColor('');
  };

  return (
    <div
      className="position-absolute bg-white rounded-4 overflow-hidden overflow-y-auto pt-2 "
      style={{
        opacity: '0.9',
        width: '200px',
        height: 'auto',
        maxHeight: '200px',
        top: '10px',
        left: '109px',
        transform: 'translateX(-50%)',
        marginBottom: '0px',
        zIndex: 1000,
        border: '1px solid #dee2e6'
      }}
    >
      <div className="d-flex justify-content-end align-items-center mb-1">
        <button
          className="btn btn-sm btn-outline-secondary border-0 d-flex justify-content-center align-items-center p-0"
          onClick={onClose}
        >
          <RxCross2 size={16} />بستن
        </button>
      </div>

      {/* بخش انتخاب رنگ */}
      <div className="mb-3">
        <label className="form-label mb-1 text-center">رنگ:</label>
        <div className="d-flex gap-2">
          {['آبی', 'سبز', 'قرمز', 'آجری'].map(color => (
            <div key={color} className="d-flex flex-column align-items-center">
              <button
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`rounded-circle border-0 p-0 position-relative`}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor:
                    color === 'آبی' ? '#0000ff' :
                      color === 'سبز' ? '#00ff00' :
                        color === 'قرمز' ? '#ff0000' :
                          '#dd9933',
                  border: selectedColor === color ? '2px solid rgb(20, 20, 19)' : '2px solid #dee2e6'
                }}
                title={color}
              />
              {/* خط زیر رنگ انتخاب شده */}
              {selectedColor === color && (
                <div style={{
                  width: '25px',
                  height: '2px',
                  backgroundColor: 'rgb(20, 20, 19)',
                  marginTop: '4px'
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* بخش انتخاب وزن */}
      <div className="mb-3">
        <label className="form-label mb-1">وزن:</label>
        <div className="d-flex flex-wrap gap-2">
          {['1 کیلوگرم', '2 کیلوگرم', '3 کیلوگرم', '4 کیلوگرم'].map(weight => (
            <div key={weight} className="d-flex flex-column align-items-center">
              <div
                type="button"
                onClick={() => setSelectedWeight(weight)}
                className={`text-sm bg-weight border-0 fw-bold mb-1`}
                disabled={selectedColor && (!stockInfo[selectedColor] || stockInfo[selectedColor][weight] === 0)}
              >
                {weight}
              </div>
              {/* خط زیر وزن انتخاب‌شده */}
              {selectedWeight === weight && (
                <div style={{
                  width: '90%',
                  height: '2px',
                  backgroundColor: 'rgb(20, 20, 19)',
                  marginTop: '4px'
                }} />
              )}
            </div>
          ))}
        </div>

        {selectedWeight && selectedColor && (
          <div className="mt-2 position-relative">
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn btn-sm border-0 p-0"
                onClick={handleRemoveWeight}
              >
                <RxCross2 size={12} />
              </button>
              <span className="text-muted me-2">پاک کردن</span>
            </div>
          </div>
        )}
      </div>

      {/* نمایش موجودی انبار اگر هر دو انتخاب شده باشند */}
      {selectedColor && selectedWeight && stockInfo[selectedColor] && stockInfo[selectedColor][selectedWeight] !== undefined && (
        <div className="mb-3">
          <div className="d-flex justify-content-center">
            <span className="fw-bold">
              {stockInfo[selectedColor][selectedWeight] === 0 ? '۰' : stockInfo[selectedColor][selectedWeight]} <span className="text-muted">  عدد در انبار</span>
            </span>
          </div>
        </div>
      )}

      {/* دکمه افزودن به سبد خرید */}
      <div
        className={`bg-orange text-md text-center text-white w-100 py-2 ${(!selectedColor || !selectedWeight || stockInfo[selectedColor]?.[selectedWeight] === 0) ? 'opacity-50 pe-none' : ''}`}
        disabled={!selectedColor || !selectedWeight || !stockInfo[selectedColor] || stockInfo[selectedColor][selectedWeight] === 0}
        onClick={handleAddToCart}
      >
        افزودن به سبد خرید
      </div>
    </div>
  );
}