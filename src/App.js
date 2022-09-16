import React from 'react';
//import{ BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Producto from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Producto greeting={"Tabacos SA"}/>
        </div>
      </div>
  );
}

