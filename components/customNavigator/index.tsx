import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Custom from "./Custom";
import { memo } from "react";
const Stack = createStackNavigator();
console.log("createStackNavigator");

function CustomNavigator({
  data,
  onData,
  onCanceled,
}: {
  data: string;
  onData: (data: string) => void;
  onCanceled: () => void;
}) {
  return (
    <NavigationContainer
      independent={true}
      onUnhandledAction={(action) => {
        switch (action.type) {
          case "set_data":
            onData(action.data);
            break;
          case "cancel":
            onCanceled();
            break;
          default:
            console.log("Unhandled action", action);
        }
      }}
    >
      <Stack.Navigator id="customNavigator">
        <Stack.Screen name="Home" component={Home} initialParams={{ data }} />
        <Stack.Screen
          name="Custom"
          component={Custom}
          initialParams={{ data }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(CustomNavigator);
