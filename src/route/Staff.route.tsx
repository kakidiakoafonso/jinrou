import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import cores from "../configs/style/colors"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../views/Home/Home';
import Eventos from '../views/Eventos/Eventos';


import CustomTabBar from '../component/TabBar/CustomTabBar';
import Comprado from '../views/Comprado/Comprado';
import Vantagens from '../views/Vantagens/Vantagens';
import Perfil from '../views/Apoiador/Apoiador';
import HomeStaff from '../views/HomeStaff/HomeStaff';
import Apoiador from '../views/Apoiador/Apoiador';
import CadastrarEvento from '../views/CadastrarEvento/CadastrarEvento';
import Compras from '../views/ComprasDetail/Compras';
import DetalheEvento from '../views/DetalheEvento/DetalheEvento';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function NonAuthenticatedRoute() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Apoiador" component={Apoiador}/>
        <Stack.Screen name="CadastrarEvento" component={CadastrarEvento}/>
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
      <Tab.Screen name="Home" component={HomeStaff}/>
      <Tab.Screen name="Eventos" component={Eventos}/>
      <Tab.Screen name="Compras" component={Compras}/>
      <Tab.Screen name="EventosDetalhe" component={DetalheEvento}/>
    </Tab.Navigator>
  );
}

export default NonAuthenticatedRoute;