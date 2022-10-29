import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Flex, Text, Spinner } from "@chakra-ui/react";

import { useOrders } from "services/firebase/order";

const OrdersList = () => {
  const [order, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getOrdersByUser } = useOrders();

  const { userId } = useParams();

  useEffect(() => {
    getOrdersByUser(userId)
      .then((orders) => {
        setOrders(orders);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]); //eslint-disable-line

  if (loading) {
    return (
      <Flex height="100%" flexDirection="column" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      p={50}
    >
      <Text fontSize="3xl" mb={20}>
        Your orders
      </Text>
      <Flex flexDirection="column" height="100%">
        {order.map((order) => (
          <Text key={order.id}>OrderId: {order.id}</Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default OrdersList;
