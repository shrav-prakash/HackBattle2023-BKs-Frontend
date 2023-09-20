import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import PickupRequest from './components/PickupRequest';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  let token = null;
  AsyncStorage.getItem("token")
    .then((t) => (token = t))
    .catch((err) => console.log(err));

  console.log(token)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token ? "Home" : "Login"}>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Signup" component={SignupForm} />
        <Stack.Screen name="Pickup" component={PickupRequest} />
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
