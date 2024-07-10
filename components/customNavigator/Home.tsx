import { useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { foo } from "./navigation"

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Button
        title="dispatch"
        onPress={() => {
          // navigationRef.emit({
          //   type: "foo",
          //   data: {
          //     bar: "baz",
          //   },
          //   canPreventDefault: true,
          //   target: navigation.getId(),
          // });
          navigation.dispatch({
            type: "foo",
            data: {
              bar: "baz",
            },
            canPreventDefault: true,
            target: navigation.getId(),
          })
          //foo()
        }}
      />
    </View>
  );
}
