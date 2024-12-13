import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";


function App(){

  const Stack = createNativeStackNavigator();
  const options = {headerShown: false};

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"}/>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App