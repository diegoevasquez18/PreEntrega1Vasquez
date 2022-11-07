import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ItemDetailContainer/ItemDetailContainer";
import Productos from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";

import { Register } from "./components/Client/Register/Register";
import { Greeting } from "./components/userData/UserData";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Client/Login/Login";

import { ChakraProvider } from "@chakra-ui/react";
import { AlertContextProvider } from "./Alerta/AlertContext";
import { CartContextProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlertContextProvider>
          <CartContextProvider>
            <ChakraProvider>
              <BrowserRouter>
                <Navbar />
                <Greeting />
                <Routes>
                  <Route path="/" element={<Productos />} />
                  <Route path="/category/:categoryId" element={<Productos />} />
                  <Route
                    path="/detail/:productId"
                    element={<ProductDetail />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </BrowserRouter>
              <Footer />
            </ChakraProvider>
          </CartContextProvider>
        </AlertContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
