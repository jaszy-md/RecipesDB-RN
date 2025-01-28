import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ApplicationStyles, Colors } from 'Theme'
import HomeStack from './HomeStack';
import RecipeStack from './RecipeStack';
import IngredientStack from './IngredientStack';

const Tab = createBottomTabNavigator()

const iconMap = {
  MainHomeStack: 'home-outline',
  RecipeStack: 'book-open-variant',
  IngredientStack: 'food',
}

export default function MainTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="MainHomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const iconName = iconMap[route.name]
          return (
            <Icon
              name={iconName}
              size={ApplicationStyles.navigation.tabBar.iconSize.size}
              color={color}
            />
          )
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: ApplicationStyles.navigation.tabBar.tabBarStyle,
      })}
    >
      <Tab.Screen
        name="MainHomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="RecipeStack"
        component={RecipeStack}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="IngredientStack"
        component={IngredientStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
