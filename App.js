import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

      {/* init là chọn trang hien thi ban dau mac dinh la dong dau tien
    headShoewn hiern thị tên trang*/}
      <Stack.Navigator initialRouteName='App 1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='App 1' component={App1} />
        <Stack.Screen name='App 2' component={App2} />
        <Stack.Screen name='App 3' component={App3} />
       

      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
