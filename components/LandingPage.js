import { Button, Pressable, Text, View } from "react-native";
import BgImg from "./BgImg";

export default function LandingPage({ navigation }) {
  return (
    <BgImg img="landing">
      <Button onPress={() => navigation.navigate("Login")} style={{flex:1}} title=""></Button>
      <Button onPress={() => console.log("hello")} style={{flex:1}} title=""></Button>
    </BgImg>
  );
}
