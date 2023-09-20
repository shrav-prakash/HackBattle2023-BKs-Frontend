import { useState, useEffect } from "react";
import BgImg from "./BgImg";
import { Text, FlatList } from "react-native";
import Delivery from "./Delivery";

export default function PendingPickups() {
  const [pickups, setPickups] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getAcceptedPickups = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https:/192.168.168.176:3001/api/user/acceptedPickups"
    );
    setPickups(response.data.pickups);
    setIsLoading(false);
  };
  useEffect(() => {
    getAcceptedPickups();
  }, []);
  return (
    <BgImg>
      <Text>PENDING DELIVERIES</Text>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <FlatList
          data={pickups}
          renderItem={({ item, index }) => {
            <Delivery
              key={index}
              id={index}
              from={item.pickupFrom}
              to={item.deliverTo}
            />;
          }}
        />
      )}
    </BgImg>
  );
}
