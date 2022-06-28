import React from 'react'
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator}  from '@react-navigation/native-stack'
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';

const stack = createNativeStackNavigator();


    const App = () => {
      return (
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor='white' />
          <stack.Navigator screenOptions={{header: () => null}}>
            <stack.Screen name="HomeScreen" component={HomeScreen} />
            <stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </stack.Navigator>
        </NavigationContainer>
      );
    };


export default App