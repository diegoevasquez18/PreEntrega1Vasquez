import React from 'react';
import{ BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio.js'
import News from './components/Novedades/News.js'
import Producto from './components/ItemListContainer/ItemListContainer.js';
import Nosotros from './components/Nosotros/Nosotros.js';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
      <div>
          <Router>
          <Navbar />
          <Route path='/preentrega1-vasquez/src/components/Inicio/Inicio.js' component ={ Inicio }/>
           <Route path='/preentrega1-vasquez/src/components/News/News.js' component ={ News }/>
           <Route path='/preentrega1-vasquez/src/components/ItemListContainer/ItemListContainer.js' component={ Producto }/>
           <Route path='/preentrega1-vasquez/src/components/Nosotros/Nosotros.js' component={ Nosotros }/>
          </Router>
      </div>
  );
}

