import { Text, TextInput, Pressable, View, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BgImg from "./BgImg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function PickupRequest({ navigation }) {
  const [merchant, setMerchant] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [tod, setTod] = useState(null);
  const [locations, setLocations] = useState([]);

  const deliveryTimes = [
    new Date(new Date().getTime() + 1 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 3 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 4 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 6 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 7 * 60 * 60 * 1000),
    new Date(new Date().getTime() + 8 * 60 * 60 * 1000),
  ];

  const getLocations = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://192.168.168.176:3001/api/user/locations",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setLocations(response.data.locations);
  };

  useEffect(() => {
    getLocations();
  }, []);

  const schedulePickup = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);

    console.log(tod.getTime());
    try {
      const response = await axios.post(
        "http://192.168.168.176:3001/api/user/schedule",
        {
          pickupLocationId: locations.find((loc) => loc.name === pickup)._id,
          dropLocationId: locations.find((loc) => loc.name === drop)._id,
          pickupMaxTime: tod.getTime(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigation.navigate("DeliveryStatus");
    } catch (err) {
      console.log(err.response);
    }
  };

  const dropdownIcon = (isOpened) => (
    <FontAwesome
      name={isOpened ? "chevron-up" : "chevron-down"}
      color={"#ffffff"}
      size={18}
    />
  );

  return (
    <BgImg img="pickup">
      <Text style={styles.heading}>PACKAGE DETAILS</Text>
      <View style={styles.ipWrapper}>
        <Text style={styles.label}>DELIVERY MERCHANT</Text>
        <TextInput
          style={styles.textip}
          onChangeText={(txt) => setMerchant(txt)}
          value={merchant}
        />
      </View>
      <View style={styles.ipWrapper}>
        <Text style={styles.label}>PACKAGE PICKUP LOCATION</Text>
        <SelectDropdown
          data={locations.map((loc) => loc.name)}
          buttonStyle={styles.ip}
          buttonTextStyle={{ color: "white" }}
          rowStyle={styles.rowStyle}
          rowTextStyle={{ color: "white" }}
          defaultButtonText
          onSelect={(txt) => setPickup(txt)}
          value={pickup}
          renderDropdownIcon={dropdownIcon}
          dropdownIconPosition="right"
        />
      </View>
      <View style={styles.ipWrapper}>
        <Text style={styles.label}>PACKAGE DROP LOCATION</Text>
        <SelectDropdown
          data={locations.map((loc) => loc.name)}
          buttonStyle={styles.ip}
          buttonTextStyle={{ color: "white" }}
          rowStyle={styles.rowStyle}
          rowTextStyle={{ color: "white" }}
          defaultButtonText
          onSelect={(txt) => setDrop(txt)}
          value={drop}
          renderDropdownIcon={dropdownIcon}
          dropdownIconPosition="right"
        />
      </View>
      <View style={styles.ipWrapper}>
        <Text style={styles.label}>ESTIMATED TIME OF DELIVERY</Text>
        <SelectDropdown
          data={deliveryTimes}
          buttonStyle={styles.ip}
          buttonTextStyle={{ color: "white" }}
          rowStyle={styles.rowStyle}
          rowTextStyle={{ color: "white" }}
          defaultButtonText
          onSelect={(txt) => setTod(txt)}
          value={tod}
          renderDropdownIcon={dropdownIcon}
          dropdownIconPosition="right"
        />
      </View>
      <View style={styles.fare}>
        <Text style={styles.fareLabel}>Fare: </Text>
        <Text style={styles.fareAmt}>₹25</Text>
      </View>
      <Pressable onPress={schedulePickup} style={styles.postBtn}>
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          POST REQUEST
        </Text>
      </Pressable>
    </BgImg>
  );
}

const styles = StyleSheet.create({
  textip: {
    width: 325,
    height: 50,
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    padding: 4,
    marginTop: 3,
    color: "white",
    fontSize: 18,
    paddingLeft: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 30,
    marginTop: -200,
    color: "white",
  },
  label: {
    fontWeight: "light",
    color: "white",
  },
  ip: {
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    padding: 4,
    marginTop: 3,
    width: 325,
  },
  ipWrapper: {
    paddingBottom: 10,
  },
  fare: {
    flexDirection: "row",
  },
  fareLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "light",
  },
  fareAmt: {
    color: "white",
    fontSize: 20,
    fontWeight: "light",
  },
  rowStyle: {
    backgroundColor: "black",
  },
  postBtn: {
    backgroundColor: "#F77A36",
    padding: 10,
    marginTop: 20,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
