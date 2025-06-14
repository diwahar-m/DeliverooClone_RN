import './global.css';

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import {store} from './store';
import {Provider} from 'react-redux';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              name="Basket"
              options={{headerShown: false}}
              component={BasketScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
