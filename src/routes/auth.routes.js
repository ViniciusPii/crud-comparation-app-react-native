import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {ThemeContext} from 'styled-components';

import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const theme = useContext(ThemeContext);

  return (
    <AuthStack.Navigator screenOptions={{gestureEnabled: false}}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
          headerTitleStyle: {
            textAlign: 'center',
            marginRight: Platform.OS === 'ios' ? 0 : 50,
          },
          headerTintColor: theme.white,
          headerStyle: {
            backgroundColor: theme.purple600,
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
