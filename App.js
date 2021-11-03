import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage, Login, SignUpPage, SplashScreen, WelcomePage,ForgottenPassword } from "./Components/index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUpPage' component={SignUpPage}/>
        <Stack.Screen name='WelcomePage' component={WelcomePage}/>
        <Stack.Screen name='Forgotten' component={ForgottenPassword}/>
        {/* <Stack.Screen name='' component={}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
