import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View, Pressable } from "react-native";
import BgImg from './BgImg'
import InputWrapper from "./InputWrapper";

export default function SignupForm() {
    const [name, setName] = useState('')
    const [regno, setRegno] = useState('')
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('')
    const [rpw, setRpw] = useState('')

    const loginHandler = () => {
    }

    return (
        <BgImg style={styles.bg} img="../assets/signup-bg.png">
            <View style={styles.loginForm}>
                <Text style={styles.heading}>SIGN-UP</Text>
                <InputWrapper label="Full Name:" val={name} setVal={txt => setName(txt)} />
                <InputWrapper label="Registration Number:" val={regno} setVal={txt => setRegno(txt)} />
                <InputWrapper label="VIT Email-ID:" val={email} setVal={txt => setEmail(txt)} />
                <InputWrapper label="Password:" val={pw} setVal={txt => setPw(txt)} />
                <InputWrapper label="Retype Password:" val={rpw} setVal={txt => setRpw(txt)} />
                <Pressable style={styles.submitBtn}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>SIGN UP</Text>
                </Pressable>
                <Text style={{ textAlign: "center" }}>Already have an account?</Text>
                <Pressable>
                    <Text style={{ textDecorationLine: 'underline', textAlign: "center" }}>Sign-In</Text>
                </Pressable>
            </View>
        </BgImg >

    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
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