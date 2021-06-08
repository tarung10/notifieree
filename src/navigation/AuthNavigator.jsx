import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import OTPScreen from "../screens/OTPScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: { elevation: 0 },
      headerTitleStyle: { fontSize: 22 },
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
    <Stack.Screen
      name="OTP"
      component={OTPScreen}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
