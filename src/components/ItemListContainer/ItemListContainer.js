import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock';
//import CartWidget from '../CartWidget/CartWidget'
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const Productos = () => {
    const[products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)
        getProducts(categoryId).then(products =>{
            setProducts(products)
        }).finally(() =>{
            setLoading(false);
        })
    },[categoryId])
    console.log(products);

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return( <div className='containerIlist'>
        <div>
        <h1>Nuestros productos</h1>
        </div>
        <ItemList products={products}/>
        </div>
)}

export default Productos