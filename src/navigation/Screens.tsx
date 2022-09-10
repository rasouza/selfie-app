import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
  Groups,
  Camera,
} from '../screens';
import {useAuth, useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();
  const {isSignedIn} = useAuth();

  console.log('isSignedIn', isSignedIn);

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      {!isSignedIn ? (
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Groups"
            component={Groups}
            options={screenOptions.groups}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: t('navigation.home')}}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={screenOptions.back}
          />
          <Stack.Screen
            name="Components"
            component={Components}
            options={screenOptions.components}
          />
          <Stack.Screen
            name="Articles"
            component={Articles}
            options={{title: t('navigation.articles')}}
          />
          <Stack.Screen
            name="Pro"
            component={Pro}
            options={screenOptions.pro}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
