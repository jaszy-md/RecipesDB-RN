import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from 'Containers/Recipes/RecipeScreen';
import RecipeInfo from 'Containers/SingleRecipe/RecipeInfo.js';
import AddRecipe from 'Containers/SingleRecipe/AddRecipe';

const Stack = createStackNavigator();

function RecipeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
      <Stack.Screen name="Recipes" component={RecipeScreen} />
      <Stack.Screen name="RecipeInfo" component={RecipeInfo} />
      <Stack.Screen name="AddRecipe" component={AddRecipe} />
    </Stack.Navigator>
  );
}

export default RecipeStack;
