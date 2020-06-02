import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {ThemeContext} from 'styled-components';

import Home from '../views/App/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const theme = useContext(ThemeContext);

  return (
    <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
      <AppStack.Screen
        name="CreateAccount"
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Bem-Vindo',
          headerTitleStyle: {
            textAlign: 'center',
          },
          headerTintColor: theme.white,
          headerStyle: {
            backgroundColor: theme.purple600,
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
