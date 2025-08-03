import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Search, X } from 'react-bootstrap-icons';

const ProductSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showClear, setShowClear] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('جستجوی محصول:', searchTerm);
    // اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
  };

  const handleClear = () => {
    setSearchTerm('');
    setShowClear(false);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowClear(e.target.value.length > 0);
  };

  return (
    <Form onSubmit={handleSearch} className="w-100">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="جستجوی محصولات"
          value={searchTerm}
          onChange={handleChange}
          className="border-end-0 nav-search nav-item "
        />
        {showClear && (
           <Button
            variant="link"
            onClick={handleClear}
            className="position-absolute start-50 top-50 me-5  translate-middle-y  p-0 "
            style={{ zIndex: 5 , color: 'gray' }}
          >
            <X size={28} className='border-end border-start-0 me-3'/>
          </Button>
        )}
        <Button 
          variant="" 
          type="submit"
          className="border-start-0 position-absolute search-btn"
        >
          <Search />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default ProductSearchBox;