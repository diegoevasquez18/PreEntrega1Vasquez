import { useCart } from "../../context/CartContext";
import {
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'

const CartItem = ({ product }) => {
  const { removeItem } = useCart();

  return (
        <Tbody>
          <Tr>
            <Td>{product.quantity}</Td>
            <Td>{product.name}</Td>
            <Td>{product.price}</Td>
            <Td>{product.price * product.quantity}</Td>
            <Td><button onClick={() => removeItem(product.id)}>X</button></Td>
          </Tr>
        </Tbody>
  );
};

export default CartItem;
