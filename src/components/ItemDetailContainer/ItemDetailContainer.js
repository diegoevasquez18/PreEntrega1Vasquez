import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Detalle from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ProductDetail = ({setCart} ) => {
    const[product, setProduct] = useState ({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(() =>{
       
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc =>{
            const data = doc.data()

            const productAdapted = {id: doc.id, ...data}

            setProduct(productAdapted)
        }).catch(error =>{
            alert('no funca')
        })
        .finally(() =>{
            setLoading(false)
        })
    },[productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return( 
            <div className='itemDetailContainer'>
             <div className='detalle'>
               <Detalle {...product} setCart={setCart}/>
             </div>
           </div>
           

           
)}

export default ProductDetail