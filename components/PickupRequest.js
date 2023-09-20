import { Text, TextInput, Pressable } from "react-native"
import SelectDropdown from "react-native-select-dropdown"

export default function PickupRequest() {
    const [merchant, setMerchant] = useState('')
    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [tod, setTod] = useState('')

    const pickupAreas = ['Main Gate', 'Amazon Drop point', 'Myntra Drop Point', 'Flipkart Drop Point']
    const dropAreas = ['A/B Block - Girls', 'C/D Block - Girls', 'E/F Block - Girls', 'G/H Block - Girls']
    const deliveryTimes = ['12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM']

    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 36 }}>PACKAGE DETAILS</Text>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>DELIVERY MERCHANT</Text>
                <TextInput style={styles.ip} onChangeText={setVal} value={val} />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>PACKAGE PICKUP LOCATION</Text>
                <SelectDropdown data={pickupAreas} style={styles.ip} onChangeText={setVal} value={val} />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>PACKAGE DROP LOCATION</Text>
                <SelectDropdown data={dropAreas} style={styles.ip} onChangeText={setVal} value={val} />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>ESTIMATED TIME OF DELIVERY</Text>
                <SelectDropdown data={deliveryTimes} style={styles.ip} onChangeText={setVal} value={val} />
            </View>
            <View style={styles.fare}>
                <Text>Fare: </Text>
                <Text style={styles.fareAmt}>25</Text>
            </View>
            <Pressable>
                <Text style={styles.postBtn}>POST REQUEST</Text>
            </Pressable>
        </View>
    )
}