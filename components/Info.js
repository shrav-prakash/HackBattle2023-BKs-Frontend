import { Text } from 'react-native';

export default function Info({ label, details }) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.details}>{details}</Text>
        </View>
    )
}