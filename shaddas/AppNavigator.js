import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import CustomDrawerContent from './components/CustomDrawerContent';
import ProductDetailScreen from './components/ProductDetailScreen';
import { Ionicons } from '@expo/vector-icons';
import { BasketProvider } from './context/BasketContext';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="ProductList"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ProductList') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Checkout') {
          iconName = focused ? 'cart' : 'cart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="ProductList"
      component={ProductList}
      options={{ headerShown: false, title: 'Home' }}
    />
    <Tab.Screen
      name="Checkout"
      component={Checkout}
      options={{ headerShown: false, title: 'Checkout' }}
    />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <BasketProvider>
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'back',
          overlayColor: 'transparent',
          drawerStyle: {
            width: '60%', 
          },
        }}
      >
        <Drawer.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  </BasketProvider>
);

export default AppNavigator;
