import { useEffect, useState } from "react"
import { Text, StyleSheet } from 'react-native'
import axios from 'axios'
import BgImg from "./BgImg";
import Delivery from "./Delivery";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserDeliveries() {
    const [isLoading, setIsLoading] = useState(false)
    const [deliveries, setDeliveries] = useState('')
    const getDeliveries = async () => {
        setIsLoading(true)
        const token = await AsyncStorage.getItem("token");
        try {
            const response = await axios.get(
                "http://192.168.168.176:3001/api/user/acceptedPickups",
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data)
            setDeliveries(response.data.pickups);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getDeliveries()
    }, [])

    return (
        <BgImg img='delivery' style={{ justifyContent: 'flex-start' }}>
            <Text style={styles.heading}>SCHEDULED DELIVERIES</Text>
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
            {!isLoading && deliveries.length == 0 && <Text style={{ alignSelf: "center" }}>No Scheduled Deliveries available right now!</Text>}
        </BgImg>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 20,
    }
})
