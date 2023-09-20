import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View, Pressable } from "react-native";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('')

    const loginHandler = () => {

    }

    return (
        <View style={styles.bg}>
            <View style={styles.loginForm}>
                <Text style={styles.heading}>SIGN-IN</Text>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>VIT E-Mail ID:</Text>
                    <TextInput style={styles.ip} onChangeText={val => setEmail(val)} value={email} />
                </View>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput style={styles.ip} secureTextEntry={true} onChangeText={val => setPw(val)} value={pw} />
                </View>
                <Pressable style={styles.submitBtn}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>SIGN IN</Text>
                </Pressable>
                <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
                <Pressable>
                    <Text style={{ textDecorationLine: 'underline', textAlign: "center" }}>Sign-Up</Text>
                </Pressable>
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#FF7900',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginForm: {
        padding: 36,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    heading: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 20
    },
    submitBtn: {
        color: 'white'
    },
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
    submitBtn: {
        backgroundColor: "#62516D",
        color: "white",
        width: 90,
        alignSelf: "center",
        padding: 5,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        fontWeight: "bold",
        paddingBottom: 2
    }
})