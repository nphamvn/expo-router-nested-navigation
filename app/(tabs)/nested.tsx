import CustomNavigator from "@/components/customNavigator";
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Screen() {
  const [data, setData] = useState<string>();
  const [showNavigator, setShowNavigator] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>Data: {data}</Text>
      <Button
        title="Enter"
        onPress={() => {
          setShowNavigator(true);
        }}
      />
      {showNavigator && (
        <View
          style={{
            height: 300,
            backgroundColor: "blue",
          }}
        >
          <Text>Header</Text>
          <CustomNavigator
            data={data}
            onData={(data) => {
              setData(data);
              setShowNavigator(false);
            }}
            onCanceled={() => {
              setShowNavigator(false);
            }}
          />
          <Text>Footer</Text>
        </View>
      )}
    </View>
  );
}
