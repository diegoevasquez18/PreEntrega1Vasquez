import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/ItemDetailContainer/ItemDetailContainer';
import Productos from './components/ItemListContainer/ItemListContainer';
import './App.css'
import { CartContextProvider }  from './context/CartContext';


import Cart from './components/Cart/Cart';
import { Form } from './components/Form/Register';

import { AlertProvider } from './Alerta/AlertContext';
import { ShowProvider } from './showContext/ShowContext';
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Form/Login';
import { Greeting } from './components/userData/UserData';


function App() {

 

  return (
     <div className='App'>
      <AuthProvider> 
        <ShowProvider>
          <AlertProvider>  
            <CartContextProvider>
            <ChakraProvider>
              <BrowserRouter>
               <Navbar />
               <Greeting />
                  <Routes>
                    <Route path='/' element={<Productos />}/>
                    <Route path='/category/:categoryId' element={<Productos />} />
                    <Route path='/detail/:productId' element={<ProductDetail />} />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Form />} />
                  </Routes>   
              </BrowserRouter>
              <Footer />
              </ChakraProvider>
            </CartContextProvider>
          </AlertProvider>
       </ShowProvider>
       </AuthProvider>
     </div>
  );
}

export default App