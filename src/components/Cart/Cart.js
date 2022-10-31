import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import { useOrders } from "../../services/firebase/order";

import { useCart } from "../../context/CartContext";
import { useAlert } from "../../Alerta/AlertContext";

import { Button, Flex, Text, Box, Spinner,Table,
  Thead,
  Tr,
  Th,
  TableContainer
 } from "@chakra-ui/react";
import "./cart.css";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const { cart, totaly, removeItem, clearCart, totalQuantity } = useCart();

  const { createOrder } = useOrders();
  const { setAlert } = useAlert();

  const handleCreateOrder = () => {
    setLoading(true);

    createOrder()
      .then((response) => {
        if (response.result === "orderCreated") {
          removeItem();
          clearCart();
          setOrderId(response.id);
        }
      })
      .catch((error) => {
        setAlert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Flex height="100%" flexDirection="column" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (orderId !== "") {
    return (
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        p={50}
      >
        <Box>
          <Text fontSize="3xl">
            Su pedido es correcto! Muchas gracias por utilizar Fragrance Market.
            Su orden es: {orderId}. Contactese si tiene alguna consulta!
          </Text>
        </Box>
        <Flex flexDirection="column">
          <Button
            variant="solid"
            size="md"
            backgroundColor="#eeeeee"
            onClick={() => navigate("/")}
          >
            Inicio
          </Button>
        </Flex>
      </Flex>
    );
  }

  if (!totalQuantity) {
    return (
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        p={50}
      >
        <Box>
          <Text fontSize="3xl">Todavia no realizaste ninguna compra?</Text>
        </Box>
        <Flex flexDirection="column">
          <Text fontSize="3xl">Mira nuestros productos...</Text>
          <Button
            variant="solid"
            size="md"
            backgroundColor="#eeeeee"
            onClick={() => navigate("/")}
          >
            Inicio
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <div className="cartContainer">
      <TableContainer>
      <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Cantidad</Th>
          <Th>Nombre</Th>
          <Th isNumeric>Precio</Th>
          <Th>Precio total</Th>
          <Th>Eliminar</Th>
        </Tr>
      </Thead>
    {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        </Table>
     </TableContainer>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Text fontWeight={800} fontSize={"3xl"}>
          Total: ${totaly}
        </Text>
        <Button
          variant="solid"
          size="lg"
          backgroundColor="#aaeeee"
          onClick={handleCreateOrder}
        >
          Create Order
        </Button>
      </Flex>
    </div>
  );
};
export default Cart;
