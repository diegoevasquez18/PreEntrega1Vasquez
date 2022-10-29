import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Detalle from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";
import { getProductsById } from "../../services/firebase/products";

const ProductDetail = ({ setCart }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    getProductsById(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        alert("no funca");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="itemDetailContainer">
      <div className="detalle">
        <Detalle {...product} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductDetail;
