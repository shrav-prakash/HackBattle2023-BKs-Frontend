import axios from "axios";
import { useEffect, useState } from "react";
import BgImg from "./BgImg";
import { Text, FlatList } from "react-native";
import Delivery from "./Delivery";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AvailableDeliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDeliveries = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://192.168.168.176:3001/api/user/availablePickups",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setDeliveries(response.data.pickups);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDeliveries();
  }, []);
  return (
    <BgImg img="login">
      <Text>AVAILABLE DELIVERIES</Text>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <FlatList
          data={deliveries}
          renderItem={({ item, index }) => (
            <Delivery
              key={index}
              id={index}
              from={item.pickupFrom}
              to={item.deliverTo}
            />
          )}
        />
      )}
    </BgImg>
  );
}
