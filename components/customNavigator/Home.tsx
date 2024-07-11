import { View, Text, Button } from "react-native";

export default function Home({ navigation, route }) {
  const setData = (data: string) => {
    navigation.dispatch({
      type: "set_data",
      data: data,
    });
  };
  return (
    <View>
      <Text>{route.params?.data}</Text>
      <Button
        title="foo"
        onPress={() => {
          setData("foo");
        }}
      />
      <Button
        title="custom"
        onPress={() => {
          navigation.navigate("Custom");
        }}
      />
      <Button
        title="cancel"
        onPress={() => {
          navigation.dispatch({
            type: "cancel",
          });
        }}
      />
    </View>
  );
}
