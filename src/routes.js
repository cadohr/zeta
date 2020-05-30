import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Plan" component={Plan} />
          <Stack.Screen name="Retirement" component={Retirement} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
