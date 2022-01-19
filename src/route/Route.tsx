import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserRoute from './User.route';
import StaffRoute from './Staff.route';
import NonAuthenticatedRoute from './NonAuthenticated.route';
import { useUser } from '../context/UserContext';

export default function Route() 
{
  const {User} = useUser()
  // User.nome = "Kakidiako"
  // User.tipo = "staff"
  console.log(User);
  
  return (
    <NavigationContainer>
        {User===null ? <NonAuthenticatedRoute/>
        :
        User.tipo==='staff'? 
        <StaffRoute/> : <UserRoute/>}
    </NavigationContainer>
  );
}