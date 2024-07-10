import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="dispatch"
        onPress={() => {
          navigation.dispatch({
            type: "FOO",
            payload: { data: "BAR" },
          });
        }}
      />
    </View>
  );
}
