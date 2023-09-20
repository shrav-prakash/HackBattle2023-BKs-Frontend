import { View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

export default function InputWrapper({ label, val, setVal }) {
    return (
        <View style={styles.ipWrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.ip} onChangeText={setVal} value={val} />
        </View>
    )
}

const styles = StyleSheet.create({
    ip: {
        backgroundColor: "white",
        borderColor: "white",
        borderRadius: 8,
        padding: 4,
        marginTop: 3,
        width: 180
    },
    ipWrapper: {
        paddingBottom: 10
    },
    label: {
        fontWeight: "bold",
        paddingBottom: 2
    }
})


