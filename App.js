import React from "react";
import { Route, Navigator } from "./Navigator";
import { Screen1, Screen2, Screen3 } from "./Screens";
import { View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 200,
        }}
      >
        <Navigator>
          <Route name="Screen1" component={Screen1} />
          <Route name="Screen2" component={Screen2} />
          <Route name="Screen3" component={Screen3} />
        </Navigator>
      </View>
    );
  }
}
