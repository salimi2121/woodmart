import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./component/Shop/Shop";
import { SideMenuContextProvider } from "./component/Shop/contexts/SideMenuContext";

function App() {
  return (
    <SideMenuContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Router>
    </SideMenuContextProvider>
  );
}

export default App;
