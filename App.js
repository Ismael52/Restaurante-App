import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import HomeScreen from './screens/HomeScreen';
import ReservaScreen from './screens/ReservaScreen';
import HistorialScreen from './screens/HistorialScreen';

import MenuScreen from './screens/MenuScreen';
import AgregaPlatoScreen from './screens/AgregarPlatoScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta el encabezado
        />
        <Stack.Screen
          name="Reserva"
          component={ReservaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Historial"
          component={HistorialScreen}
        // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        // options={{ headerShown: false }}
        />



        <Stack.Screen
          name="Menu"
          component={MenuScreen}

        />
        <Stack.Screen
          name="AgregarPlato"
          component={AgregaPlatoScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
