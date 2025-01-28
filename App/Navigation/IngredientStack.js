import { createStackNavigator } from '@react-navigation/stack';
import IngredientScreen from 'Containers/Ingredients/IngredientScreen';

const Stack = createStackNavigator();

function IngredientStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
      <Stack.Screen name="Ingredients" component={IngredientScreen} />
    </Stack.Navigator>
  );
}

export default IngredientStack;
