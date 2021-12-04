import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Views/singIn";
import Welcome from "../Views/welcome";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const Navigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={screenOptionStyle}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={screenOptionStyle}
        name="Welcome"
        component={Welcome}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
