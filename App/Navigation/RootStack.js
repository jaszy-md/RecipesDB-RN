import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './TabStack';
import { ApplicationStyles } from 'Theme'
import Header from 'Components/Header/Header'

const Stack = createStackNavigator();

export default function RootStack() {

  return (
    <Stack.Navigator
    screenOptions={{
        headerTitle: () => <Header />,
        headerTitleAlign: 'center',
        headerStyle: ApplicationStyles.navigation.headerStyle,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        contentStyle: ApplicationStyles.rootContainer,
      }}
    >
      <Stack.Screen 
      name="Main" 
      component={TabStack} 
      options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
}
