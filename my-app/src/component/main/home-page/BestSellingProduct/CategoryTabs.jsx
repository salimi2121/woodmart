

const CategoryTabs = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  isMobile = false
}) => {
  return (
    <div className={`${isMobile ? 'category-mobail' : 'best-selling-category'} d-flex gap-4 fw-bolder border-bottom border-2 mb-3`}>
      {!isMobile && (
        <h2 className='category-h2 fs-4 fw-bolder border-bottom border-success border-2 pb-2'>
          پرفروش ترین محصولات
        </h2>
      )}
      {categories.map(category => (
        <div
          type='button'
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`d-flex justify-content-center align-items-center pb-1 fw-bold ${
            selectedCategory === category ? 'text-success' : 'bg-white'
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;