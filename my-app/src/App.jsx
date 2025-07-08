import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./component/Shop/Shop";
import { SideMenuContextProvider } from "./component/Shop/contexts/SideMenuContext";
import { CartContextProvider } from "./component/Shop/contexts/CartContext";
import { ProductsContextProvider } from "./component/Shop/contexts/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <SideMenuContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Shop />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </SideMenuContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
