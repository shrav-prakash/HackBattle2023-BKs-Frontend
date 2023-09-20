import { StyleSheet, Text, View } from 'react-native';

export default function Info({ label, details }) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.details}>{details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 2
    },
    details: {
        fontSize: 18,
        paddingBottom: 10
    }
});