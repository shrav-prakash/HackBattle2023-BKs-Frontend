import { Text, TextInput, Pressable, View, StyleSheet } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { useState } from "react"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BgImg from "./BgImg";

export default function PickupRequest() {
    const [merchant, setMerchant] = useState('')
    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [tod, setTod] = useState('')

    const pickupAreas = ['Main Gate', 'Amazon Drop point', 'Myntra Drop Point', 'Flipkart Drop Point']
    const dropAreas = ['A/B Block - Girls', 'C/D Block - Girls', 'E/F Block - Girls', 'G/H Block - Girls']
    const deliveryTimes = ['12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM']

    const dropdownIcon = isOpened => (
        <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#ffffff'} size={18} />
    )

    return (
        <BgImg style={styles.bg} img="pickup">
            <Text style={styles.heading}>PACKAGE DETAILS</Text>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>DELIVERY MERCHANT</Text>
                <TextInput style={styles.textip} onChangeText={txt => setMerchant(txt)} value={merchant} />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>PACKAGE PICKUP LOCATION</Text>
                <SelectDropdown data={pickupAreas} buttonStyle={styles.ip} buttonTextStyle={{ color: "white" }} defaultButtonText onChangeSearchInputText={txt => setPickup(txt)} value={pickup} renderDropdownIcon={dropdownIcon} dropdownIconPosition="right" />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>PACKAGE DROP LOCATION</Text>
                <SelectDropdown data={dropAreas} buttonStyle={styles.ip} buttonTextStyle={{ color: "white" }} rowStyle={styles.rowStyle} rowTextStyle={{ color: "white" }} defaultButtonText onChangeSearchInputText={txt => setDrop(txt)} value={drop} renderDropdownIcon={dropdownIcon} dropdownIconPosition="right" />
            </View>
            <View style={styles.ipWrapper}>
                <Text style={styles.label}>ESTIMATED TIME OF DELIVERY</Text>
                <SelectDropdown data={deliveryTimes} buttonStyle={styles.ip} buttonTextStyle={{ color: "white" }} defaultButtonText onChangeSearchInputText={txt => setTod(txt)} value={tod} defaultValue='' renderDropdownIcon={dropdownIcon} dropdownIconPosition="right" />
            </View>
            <View style={styles.fare}>
                <Text style={styles.fareLabel}>Fare: </Text>
                <Text style={styles.fareAmt}>₹25</Text>
            </View>
            <Pressable style={styles.postBtn}>
                <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>POST REQUEST</Text>
            </Pressable>
        </BgImg>
    )
}

const styles = StyleSheet.create({
    bg: {
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        paddingTop: 80,
        backgroundColor: "black",
        flex: 1
    },
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
        paddingLeft: 10
    },
    heading: {
        fontWeight: "bold",
        fontSize: 36,
        marginBottom: 30,
        marginTop: -200,
        color: "white"
    },
    label: {
        fontWeight: "light",
        color: "white"
    },
    ip: {
        backgroundColor: "black",
        borderColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        padding: 4,
        marginTop: 3,
        width: 325
    },
    ipWrapper: {
        paddingBottom: 10
    },
    fare: {
        flexDirection: "row"
    },
    fareLabel: {
        color: "white",
        fontSize: 20,
        fontWeight: "light"
    },
    fareAmt: {
        color: "white",
        fontSize: 20,
        fontWeight: "light"
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
        borderColor: 'black'
    }
})