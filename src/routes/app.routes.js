import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from '../contexts/AuthContext';

import {ThemeContext} from 'styled-components';

import Home from '../views/App/Home';
import CreateUser from '../views/App/CreateUser';
import EditUser from '../views/App/EditUser';
import {Button} from '../components';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const theme = useContext(ThemeContext);

  const {logout} = useAuth();

  return (
    <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Usuários',
          headerRight: () => (
            <Button
              type="link"
              icon="exit-to-app"
              iconColor="white"
              onPress={logout}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerTitleStyle: {
            textAlign: 'center',
            marginLeft: Platform.OS === 'ios' ? 0 : 60,
          },
          headerTintColor: theme.white,
          headerStyle: {
            backgroundColor: theme.purple600,
          },
        }}
      />
      <AppStack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Cadastrar Usuário',
          headerTitleStyle: {
            textAlign: 'center',
            marginRight: Platform.OS === 'ios' ? 0 : 45,
          },
          headerTintColor: theme.white,
          headerStyle: {
            backgroundColor: theme.purple600,
          },
        }}
      />
      <AppStack.Screen
        name="EditUser"
        component={EditUser}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Editar Usuário',
          headerTitleStyle: {
            textAlign: 'center',
            marginRight: Platform.OS === 'ios' ? 0 : 45,
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
