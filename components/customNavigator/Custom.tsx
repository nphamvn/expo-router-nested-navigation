import { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function Custom({ navigation, route }) {
  const [data, setData] = useState<string>(route.params?.data);
  return (
    <View>
      <TextInput
        value={data}
        onChangeText={setData}
        placeholder="Enter data..."
      />
      <Button
        title="OK"
        onPress={() => {
          navigation.dispatch({
            type: "set_data",
            data: data,
          });
        }}
      />
    </View>
  );
}
