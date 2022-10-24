import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/ItemDetailContainer/ItemDetailContainer';
import Productos from './components/ItemListContainer/ItemListContainer';
import './App.css'
import { CartContextProvider }  from './context/CartContext';
import { AlertProvider } from './Alerta/AlertContext';
import { ShowProvider } from './showContext/ShowContext';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';



function App() {

  return (
     <div className='App'>
      <ShowProvider>
        <AlertProvider>   
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
                <Routes>
                  <Route path='/' element={<Productos />}/>
                  <Route path='/category/:categoryId' element={<Productos />} />
                  <Route path='/detail/:productId' element={<ProductDetail />} />
                  <Route path='/cart' element={<CartWidget />} />
                </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </AlertProvider>
      </ShowProvider>
     </div>
  );
}

export default App