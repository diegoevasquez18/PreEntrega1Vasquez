import React from 'react';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './components/ItemDetailContainer/ItemDetailContainer';
import Productos from './components/ItemListContainer/ItemListContainer';
import './App.css'


export default function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
        <Routes>
        <Route path='/' element={<Productos />}/>
        <Route path='/category/:categoryId' element={<Productos />} />
        <Route path='/category/:categoryId' element={<Productos />} />
        <Route path='/category/:categoryId' element={<Productos />} />
        <Route path='/detail/:productId' element={<ProductDetail />}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

