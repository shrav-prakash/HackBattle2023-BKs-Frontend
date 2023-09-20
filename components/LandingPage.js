import { Pressable, Text } from "react-native";
import BgImg from "./BgImg";

export default function LandingPage() {
    return (
        <BgImg img="landingpage">
            <Text>Hello</Text>
            <Pressable styles={{ flex: 1 }} />
            <Pressable styles={{ flex: 1 }} onPress={console.log('Second')} />
        </BgImg>
    )
}