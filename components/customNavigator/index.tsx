import { createStackNavigator } from "@react-navigation/stack";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./Home";
import Profile from "./Profile";
import { useEffect } from "react";

const Stack = createStackNavigator();
import { navigationRef } from "./navigation";

export default function CustomNavigator() {
  useEffect(() => {
    navigationRef.current?.addListener("foo", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator id="customNavigator">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
