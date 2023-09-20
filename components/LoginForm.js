import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import BgImg from "./BgImg";
import InputWrapper from "./InputWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

export default function LoginForm({ navigation, token }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  console.log(token)

  const loginHandler = async () => {
    console.log(JSON.stringify({ email, password: pw }));
    fetch("http://192.168.168.176:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    }).then((res) =>
      res
        .json()
        .then((data) => {
          // store token in local storage and navigate to landing page
        //   AsyncStorage.setItem("token", data.token).catch((err) =>
        //     console.log(err)
        //   );
          RNRestart.restart();
        })
        .catch((err) => console.log(err))
    );
  };

  return (
    <BgImg style={styles.bg} img="login">
      <View style={styles.loginForm}>
        <Text style={styles.heading}>SIGN-IN</Text>
        <InputWrapper
          label="VIT Email-ID:"
          val={email}
          setVal={(txt) => setEmail(txt)}
        />
        <InputWrapper label="Password:" val={pw} setVal={(txt) => setPw(txt)} />
        <Pressable style={styles.submitBtn} onPress={loginHandler}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            SIGN IN
          </Text>
        </Pressable>
        <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{ textDecorationLine: "underline", textAlign: "center" }}
          >
            Sign-Up
          </Text>
        </Pressable>
      </View>
    </BgImg>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#FF7900",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    padding: 36,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: "#62516D",
    color: "white",
    width: 90,
    alignSelf: "center",
    padding: 5,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
});
