import React from 'react';
import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Plan from '~/pages/Plan';
import Retirement from '~/pages/Retirement';

const Stack = createStackNavigator();

export default (signedIn = false) => {
  return (
    <NavigationContainer>
      {!signedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerTransparent: true }}>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Plan"
            component={Plan}
            options={({ navigation, route }) => ({
              headerTitle: route.params.name,
              headerTitleStyle: { fontSize: 10, fontWeight: 'bold' },
              headerLeftContainerStyle: { marginLeft: 20 },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Dashboard')}
                >
                  <Icon name="chevron-left" size={20} color="#232323" />
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Retirement"
            component={Retirement}
            options={({ navigation, route }) => ({
              headerTitle: 'Meu Plano de Aposentadoria',
              headerTintColor: '#fff',
              headerTitleStyle: { fontSize: 10, fontWeight: 'bold' },
              headerLeftContainerStyle: { marginLeft: 20 },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Dashboard')}
                >
                  <Icon name="chevron-left" size={18} color="#fff" />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
