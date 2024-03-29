import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import cores from "../configs/style/colors"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../views/Home/Home';
import Eventos from '../views/Eventos/Eventos';


import CustomTabBar from '../component/TabBar/CustomTabBar';
import Comprado from '../views/Comprado/Comprado';
import Vantagens from '../views/Vantagens/Vantagens';
import Perfil from '../views/Perfil/Perfil';
import HomeStaff from '../views/HomeStaff/HomeStaff';
import VantagensMenu from '../views/VantagensMenu/VantagensMenu';
import VerVantagens from '../views/VerVantagens/index';
import UserVantagens from '../views/VantagensUser/Vantagens';
import ProximosEventos from '../views/ProximosEventos/Eventos';
import UserAdvantageList from '../views/user-advantage-list/UserAdvantageList';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function NonAuthenticatedRoute() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Comprado" component={Comprado}/>
        <Stack.Screen name="Vantagens" component={Vantagens}/>
        <Stack.Screen name="VantagensMenu" component={VantagensMenu}/>

        
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
      <Tab.Screen name="Vervantagens" component={VerVantagens}/>
      <Tab.Screen name="uservantagens" component={UserAdvantageList}/>
      <Stack.Screen name="Perfil" component={Perfil}/>
      <Stack.Screen name="proximoeventos" component={ProximosEventos}/>
      <Stack.Screen name="UserVantagens" component={UserVantagens}/>

    </Tab.Navigator>
  );
}

export default NonAuthenticatedRoute;