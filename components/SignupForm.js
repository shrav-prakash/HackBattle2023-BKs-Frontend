import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View, Pressable } from "react-native";

export default function LoginForm() {
    const [name, setName] = useState('')
    const [regno, setRegno] = useState('')
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('')
    const [rpw, setRpw] = useState('')

    const loginHandler = () => {

    }

    return (
        <View style={styles.bg}>
            <View style={styles.loginForm}>
                <Text style={styles.heading}>SIGN-UP</Text>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>Full Name:</Text>
                    <TextInput style={styles.ip} onChangeText={val => setName(val)} value={name} />
                </View>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>Registration Number:</Text>
                    <TextInput style={styles.ip} onChangeText={val => setRegno(val)} value={regno} />
                </View>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>VIT E-Mail ID:</Text>
                    <TextInput style={styles.ip} onChangeText={val => setEmail(val)} value={email} />
                </View>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput style={styles.ip} onChangeText={val => setPw(val)} value={pw} />
                </View>
                <View style={styles.ipWrapper}>
                    <Text style={styles.label}>Retype Password:</Text>
                    <TextInput style={styles.ip} secureTextEntry={true} onChangeText={val => setRpw(val)} value={rpw} />
                </View>
                <Pressable style={styles.submitBtn}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>SIGN IN</Text>
                </Pressable>
                <Text style={{ textAlign: "center" }}>Already have an account?</Text>
                <Pressable>
                    <Text style={{ textDecorationLine: 'underline', textAlign: "center" }}>Sign-In</Text>
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