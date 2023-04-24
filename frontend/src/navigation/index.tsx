import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screen from '../screens';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={screen.HomeScreen} />
        <Stack.Screen name="BookDetails" component={screen.BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;
