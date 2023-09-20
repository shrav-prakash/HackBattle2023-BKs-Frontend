import { Text, View } from 'react-native'

export default function Delivery({ id, from, to }) {
    return (
        <View style={styles.listItem}>
            <View><Text>Request {id}</Text></View>
            <View style={styles.pickdrop}>
                <Text>Pick-Up: {from}</Text>
                <Text>Drop off: {to}</Text>
            </View>
        </View>
    )
}