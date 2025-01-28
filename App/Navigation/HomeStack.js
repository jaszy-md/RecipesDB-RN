import * as React from 'react'
import HomeScreen from 'Containers/Home/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
