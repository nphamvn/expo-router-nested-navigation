import CustomNavigator from "@/components/customNavigator";
import { View, Text } from "react-native";

export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Nested Navigator</Text>
      <CustomNavigator />
    </View>
  );
}
