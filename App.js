import { StyleSheet, Text, View } from "react-native";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import PickupRequest from "./components/PickupRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [token, setToken] = useState(null);
  const setAsyncStorage = async () => {
    const t = await AsyncStorage.getItem("token");
    setToken(t);
  };
  
  useEffect( () => {
    setAsyncStorage();
  }, []);

  console.log(token);
  return token? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Pickup" component={PickupRequest} />
      </Stack.Navigator>
    </NavigationContainer>)
    :
    (<NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={LoginForm} token="lol" />
        <Stack.Screen name="Signup" component={SignupForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7900",
    alignItems: "center",
    justifyContent: "center",
  },
});
