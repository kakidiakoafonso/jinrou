import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserRoute from './User.route';
import StaffRoute from './Staff.route';
import NonAuthenticatedRoute from './NonAuthenticated.route';
import { UserContexto } from '../context/UserContext';

export default function Route() 
{
  const {user,staff} = React.useContext(UserContexto)
    console.log(user);
  
  return (
    <NavigationContainer>
        {user===false && staff===false  && <NonAuthenticatedRoute/>}
        
        {user && <UserRoute/>}
        {staff && <StaffRoute/>}
    </NavigationContainer>
  );
}