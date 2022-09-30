import React from 'react';
//import{ BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Producto from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/Inicio/Inicio';



export default function App() {
  return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Producto greeting={"FRAGRANCEMARKET"}/>
        </div>
        <div>
          <Inicio />
        </div>
      </div>
  );
}

