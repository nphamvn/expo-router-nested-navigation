import { createStackNavigator } from "@react-navigation/stack";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./Home";
import Profile from "./Profile";
import { useEffect } from "react";

const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function CustomNavigator() {
  useEffect(() => {
    navigationRef.current?.addListener("state", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
