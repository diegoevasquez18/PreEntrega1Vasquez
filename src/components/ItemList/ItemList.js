import Cards from "../Card/Cards2";
import './itemList.css'


const ItemList = ({products}) => {

return(<div className="itemList">
        {products.map(prod => {
            console.log(prod);
           return <Cards key={prod.id} prod={prod} />
        })
        }</div>
)}

export default ItemList