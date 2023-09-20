import { Button, Dimensions, Pressable, Text, View } from "react-native";
import BgImg from "./BgImg";

export default function LandingPage({ navigation }) {
    return (
        <BgImg img="landing">
            <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate('Pickup')}><View style={{ width: Dimensions.get('window').width }} /></Pressable>
            <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate('AvlDeliveries')}><View style={{ width: Dimensions.get('window').width }} /></Pressable>
        </BgImg>
    );
}
