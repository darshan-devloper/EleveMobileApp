/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Detail from './src/Detail';

const Stack = createStackNavigator();
class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} options={{
            gestureEnabled: false,
          }}
          />
          <Stack.Screen name="Detail" component={Detail} options={{
            gestureEnabled: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  };
}

export default App;
