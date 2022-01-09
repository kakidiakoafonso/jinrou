import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserRoute from './User.route';
import StaffRoute from './Staff.route';
import NonAuthenticatedRoute from './NonAuthenticated.route';

export default function Route() {
  return (
    <NavigationContainer>
        {/* <UserRoute/> */}
        {/* <NonAuthenticatedRoute/> */}
        <StaffRoute/>
    </NavigationContainer>
  );
}