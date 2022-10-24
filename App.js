import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactList from './components/ContactList';
import CreateMovement from './components/CreateMovement';
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
          options={{ title: 'Wink' }}
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        />
        <Stack.Screen
          name='MovementDetails'
          component={MovementDetails}
          options={{ title: 'Detalle de movimiento'}}
        />
        <Stack.Screen
          name='Contacts'
          component={ContactList}
          options={{ title: 'Seleccioná un contacto' }}
        />
        <Stack.Screen
          name='CreateMovement'
          component={CreateMovement}
          options={{ title: 'Enviar dinero' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
