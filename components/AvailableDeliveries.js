import axios from "axios";
import { useEffect, useState } from "react";
import BgImg from "./BgImg";
import { Text, FlatList, StyleSheet, View, Pressable } from "react-native";
import Delivery from "./Delivery";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AvailableDeliveries({navigation}) {
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
        <BgImg style={{ justifyContent: 'flex-start' }} img="delivery">
            <View style={{ flex: 4 }}>
                <Text style={styles.heading}>AVAILABLE DELIVERIES</Text>
                {isLoading && <Text style={{ alignSelf: "center" }}>Loading...</Text>}
                {!isLoading && deliveries.length > 0 && (
                    <FlatList
                        data={deliveries}
                        renderItem={({ item, index }) => (
                            <Delivery
                                key={index}
                                id={index}
                                from={item.pickupFrom.name}
                                to={item.deliverTo.name}
                            />
                        )}
                    />
                )}
                {!isLoading && deliveries.length == 0 && <Text style={{ alignSelf: "center" }}>No Deliveries available at the moment!</Text>}
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Pressable onPress={() => navigation.navigate("DeliveryStatus")} style={styles.viewDeliveries}>
                    <Text style={{ color: "white", alignSelf: "center" }}>VIEW YOUR DELIVERIES</Text>
                </Pressable>
            </View>

        </BgImg>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 20,
    },
    viewDeliveries: {
        backgroundColor: "#F77A36",
        width: 180,
        alignSelf: "center",
        padding: 5,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    }
})


