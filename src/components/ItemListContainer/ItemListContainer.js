import { useState, useEffect } from 'react'
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
const Productos = () => {
    const[products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)
        
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : (collection(db, 'products'))

        getDocs(collectionRef).then(response =>{
            console.log(response);

            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
        })
        .catch(error =>{
            alert('no funca')
        })
        .finally(() =>{
            setLoading(false)
        })
    },[categoryId])

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