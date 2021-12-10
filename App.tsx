import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/components/Home";
import Add from "./src/components/mercado/input/Add";
import Edit from "./src/components/mercado/input/Edit";
import Listar from "./src/components/mercado/list/List";

const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home"> 
        <Stack.Screen name = "Home" component ={Home}></Stack.Screen>
        <Stack.Screen name = "Adicionar" component ={Add}></Stack.Screen>
        <Stack.Screen name = "Editar" component ={Edit}></Stack.Screen>
        <Stack.Screen name = "Listar" component ={Listar}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;