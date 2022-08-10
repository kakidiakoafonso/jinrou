import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login/Login';
import { UserSign } from '../views/UserSign/UserSign';
const Stack = createNativeStackNavigator();

function NonAuthenticatedRoute() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="UserSign" component={UserSign} />
      </Stack.Navigator>
  );
}

export default NonAuthenticatedRoute;