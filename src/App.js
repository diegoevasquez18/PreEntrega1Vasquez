import React from 'react';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/Inicio/Inicio';
import ProductDetail from './components/ItemDetailContainer/ItemDetailContainer';
import Set from './components/SetProducts/Sets.jsx'
import Productos from './components/ItemListContainer/ItemListContainer';



export default function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
        <Inicio />
        <Routes>
        <Route path='/' element={<Productos />}/>
        <Route path='/category/:categoryId' element={<Productos />} />
        <Route path='/category/:categoryId' element={<Productos />} />
        <Route path='/detail/:productId' element={<ProductDetail />}/>
        </Routes>
        <div className='containerSet'>
          <Set/>
        </div>
        </BrowserRouter>
      </div>
  );
}

