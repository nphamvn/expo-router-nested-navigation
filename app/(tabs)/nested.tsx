import CustomNavigator from "@/components/customNavigator";
import { View, Text } from "react-native";

export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>Nested Navigator</Text>
      <View
        style={{
          height: 300,
          backgroundColor: "blue",
        }}
      >
        <Text>Header</Text>
        <CustomNavigator />
        <Text>Footer</Text>
      </View>
    </View>
  );
}
