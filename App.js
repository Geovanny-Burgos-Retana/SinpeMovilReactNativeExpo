import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import MovementDetails from './components/MovementDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='MovementDetails'
          component={MovementDetails}
          options={{ title: 'Detalle de movimiento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
