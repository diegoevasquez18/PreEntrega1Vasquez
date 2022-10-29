import Cards from "../Card/Cards2";
import "./itemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row" onClick={(e) => console.log(e)}>
        {products.map((prod) => {
          return <Cards key={prod.id} {...prod} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
