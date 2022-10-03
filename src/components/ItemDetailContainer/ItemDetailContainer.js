import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock';
//import CartWidget from '../CartWidget/CartWidget'
import { useParams } from 'react-router-dom';
import Detalle from '../ItemDetail/ItemDetail';

const ProductDetail = () => {
    const[product, setProduct] = useState ({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(() =>{
        getProduct(productId).then(product =>{
            setProduct(product)
        }).finally(() =>{
            setLoading(false);
        })
    },[productId])
    console.log(product);

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return <div>
               <Detalle product={product} />
           </div>
}

export default ProductDetail