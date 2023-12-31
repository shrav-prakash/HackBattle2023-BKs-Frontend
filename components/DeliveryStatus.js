import { useState, useEffect } from "react";
import { Pressable, Text, TextField, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BgImg from "./BgImg";
import Info from "./Info";

export default function DeliveryStatus() {
  const [deliverer, setDeliverer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkPickupStatus = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http:/192.168.168.176:3001/api/user/checkPickupStatus",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setDeliverer(response.data.deliverer);
    setIsLoading(false);
  };
  useEffect(() => {
    checkPickupStatus();
  }, []);
  return (
    <BgImg img="pickup">
      <Text>PARTNER DETAILS</Text>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <View>
          <Info label="Name" details={deliverer.name} />
          <Info label="Phone Number" details={deliverer.phno} />
          <Info label="Email" details={deliverer.email} />
          <Info label="Status" details={deliverer.status} />
          <Pressable>
            <Text>CONFIRM DELIVERY</Text>
          </Pressable>
        </View>
      )}
    </BgImg>
  );
}
