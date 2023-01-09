import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import PreparationScreen from './screens/PreparationScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import CatScreen from './screens/CatScreen';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Cat" component={CatScreen}  options={{presentation:'modal',headerShown:false}} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:'modal',headerShown:false}} />
          <Stack.Screen name="Preparation" component={PreparationScreen} options={{presentation:'fullScreenModal',headerShown:false}} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation:'fullScreenModal',headerShown:false}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
