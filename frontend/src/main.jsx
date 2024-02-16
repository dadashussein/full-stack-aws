import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContex.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CategoryProvider from "./context/CategoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsProvider>
      </CartProvider>
    </SidebarProvider>
  </CategoryProvider>
);
