/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import List from './screen/List';
import Detail from './screen/Detail';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
        <NavigationContainer> 
           <Stack.Navigator>
               <Stack.Screen
                   name = "Login"
                   component = { Login }
               />
               <Stack.Screen
                   name = "List"
                   component= { List }
               />
               <Stack.Screen
                   name = "Detail"
                   component= { Detail }
               />
           </Stack.Navigator>
       </NavigationContainer>
  );
};



export default App;
