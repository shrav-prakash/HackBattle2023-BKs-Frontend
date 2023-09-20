import { Text, View, StyleSheet } from 'react-native'

export default function Delivery({ id, from, to }) {
    return (
        <View style={styles.listItem}>
            <View style={styles.req}><Text style={{ fontSize: 16 }}>Request {id + 1}</Text></View>
            <View style={styles.pickdrop}>
                <Text style={{ fontSize: 11 }}>Pick-Up: {from}</Text>
                <Text style={{ fontSize: 11 }}>Drop off: {to}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderRadius: 8,
        borderWidth: 2
    },
    req: {
        paddingRight: 30
    },
    pickdrop: {
        flexDirection: "col",
    }
})