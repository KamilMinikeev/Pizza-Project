import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import { ShopContextProvider } from "./context/shop-context/shop-context.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
