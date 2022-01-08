import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedRoute from './Authenticated.route';
import NonAuthenticatedRoute from './NonAuthenticated.route';

export default function Route() {
  return (
    <NavigationContainer>
        <AuthenticatedRoute/>
        {/* <NonAuthenticatedRoute/> */}
    </NavigationContainer>
  );
}