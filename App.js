import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Consulta} from "./screens/Consulta/Consulta";
import {TiempoR} from "./screens/TiempoReal/TiempoR";
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';

const TabHome = createBottomTabNavigator();
const Stack = createStackNavigator();

function ConsultaStackScreen(){
  return(
    <Stack.Navigator initialRouteName="ListaItemConsulta">
      <Stack.Screen name="ConsultaScreen" component={Consulta}/>
    </Stack.Navigator>
  );
}

  function TiempoRealScreem(){
    return(
      <Stack.Navigator initialRouteName="ListaItemTiempoRealScreen">
      <Stack.Screen name="TiempoRealScreen" component={TiempoR}/> 
      </Stack.Navigator>
    
      )

  }

  function App(){
    return(
      <NavigationContainer>
        <TabHome.Navigator initialRouteName="ConsultaScreen"
        tabBarOptions={{
           activeTintColor: "black",
           labelStyle: {
           fontSize: 12,
           fontWeight:'bold',
        },
      }}
      >
        <TabHome.Screen
        name="ConsultaStackScreen"
        component={ConsultaStackScreen}
        options={{ tabBarLabel: "Consulta",
                    tabBarIcon:()=>(
                      <Icon
                          name='user'
                          size={28}
                          color="green"/>
                    ),

      }}

      />  
      <TabHome.Screen
      name= "TiempoRealScreen"
      component={TiempoRealScreem}
      options={{ tabBarLabel:"TiempoReal",
                  tabBarIcon:()=>(
                    <Icon
                    name='user'
                    size={28}
                    color="green"/>
                  ),
      }}
      />
      </TabHome.Navigator>
      </NavigationContainer>
    );
  }

export default App;