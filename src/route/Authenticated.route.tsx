import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import cores from "../configs/style/colors"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../views/Home/Home';
import Eventos from '../views/Eventos/Eventos';


import CustomTabBar from '../component/TabBar/CustomTabBar';
import Comprado from '../views/Comprado/Comprado';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function NonAuthenticatedRoute() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Comprado" component={Comprado}/>
      </Stack.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
      backgroundColor:cores.yellow,
    },
    tabBarLabelStyle:{
      color: cores.red,
      fontSize:14
    }
  }}

  tabBar={props=><CustomTabBar />}
      
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Eventos" component={Eventos}/>
    </Tab.Navigator>
  );
}

export default NonAuthenticatedRoute;