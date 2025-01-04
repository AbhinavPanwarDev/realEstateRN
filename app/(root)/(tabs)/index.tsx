import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}

    >

      <Text className="font-bold py-10 font-rubik text-3xl">REAL MADRID</Text>
      <Link href="/sign-in">SIGN_IN</Link>
      <Link href="/explore">EXPLORE</Link>
      <Link href="/profile">PROFILE</Link>
      <Link href="/properties/1">PROPERTY</Link>
    </View>
  );
}
